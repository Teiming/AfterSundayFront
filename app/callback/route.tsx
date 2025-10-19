import { createHmac, randomBytes, randomUUID } from 'crypto'
import type { UUID } from 'crypto'

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'

import prisma from '@aftsnd/prisma'
import type { KakaoUserData } from '@aftsnd/types'

export type Hash = string

export interface KakaoTokens {
  access_token: string
  token_type: 'bearer'
  refresh_token: string
  id_token: string
  expires_in: number
  scope: string
  refresh_token_expires_in: number
}

export interface AccessToken {
  iss: 'aftsunday.com'
  aud: 'aftsunday.com'
  sub: UUID
  jti: UUID
}

export async function GET(req: NextRequest) {
  const host = `https://${req.headers.get('host')}`
  // get code from user
  const code = req.nextUrl.searchParams.get('code')

  if (!code) {
    return NextResponse.json('Auth_code is empty', { status: 400 })
  }
  // get token from kakao authorization server
  const getKakaoToken = await fetch('https://kauth.kakao.com/oauth/token', {
    method: 'POST',
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: process.env.KAKAO_CLIENT_ID!,
      client_secret: process.env.KAKAO_CLIENT_SECRET!,
      redirect_uri: `${host}/callback`,
      code,
    }),
  })
  const kakaoToken = (await getKakaoToken.json()) as KakaoTokens

  // get userdata from kakao resouce server
  const rawUserData = await fetch('https://kapi.kakao.com/v2/user/me', {
    headers: { Authorization: `Bearer ${kakaoToken.access_token}` },
  })
  const kakaoUserData = (await rawUserData.json()) as KakaoUserData

  // hash kakao_id
  const hashedKakaoID = createHmac('sha256', process.env.KAKAOID_SECRET!)
    .update(String(kakaoUserData.id), 'utf-8')
    .digest('hex')

  // get uuid
  // 1. search kakaoid
  const checkUserID = async (kakao_id: Hash) => {
    return await prisma.users.findUnique({ where: { kakao_id } })
  }

  // 2. uuid exist?
  if (!(await checkUserID(hashedKakaoID))) {
    // 3-1. no. user not found > sign up.
    const signUp = async (kakao_id: Hash) => {
      return await prisma.users.create({ data: { kakao_id } })
    }
    const { id } = await signUp(hashedKakaoID)
    console.log('user id is ...', id)
  } else {
    // 3-2. yes. user found > sign in.
  }
  const userData = await checkUserID(hashedKakaoID)
  const uid = userData?.id as UUID

  // generate jwt_token
  // 1. access
  const payload: AccessToken = {
    iss: 'aftsunday.com',
    aud: 'aftsunday.com',
    sub: uid,
    jti: randomUUID(),
  }
  const access = jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: '10M',
  })
  // 2. refresh
  const refresh = randomBytes(48).toString('base64url')
  const hashedRefresh = {
    lookup: createHmac('sha256', process.env.REFRESH_SECRET!)
      .update(refresh)
      .digest('hex'),
    token: await bcrypt.hash(refresh, 12),
  }
  await bcrypt.compare(refresh, hashedRefresh.token)

  // 3. save refresh
  await prisma.refresh.upsert({
    create: { id: uid, ...hashedRefresh },
    update: { ...hashedRefresh },
    where: { id: uid },
  })

  const res = NextResponse.redirect(new URL('/', host))
  res.headers.set('Access-Token', access)
  res.cookies.set('Refresh-Token', refresh, {
    path: '/',
    secure: true,
    httpOnly: true,
    sameSite: 'lax',
  })
  return res
}
