import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export interface KakaoToken {
  access_token: string
  token_type: 'bearer'
  refresh_token: string
  id_token: string
  expires_in: number
  scope: string
  refresh_token_expires_in: number
}

// https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#kakaoaccount
export interface KakaoUserData {
  id: number
  connected_at: string
  kakao_account: {
    name: string
    birthyear: string
    gender: 'male' | 'female'
  }
}

export async function GET(req: NextRequest) {
  // get code from user
  const code = req.nextUrl.searchParams.get('code')

  if (!code) {
    return NextResponse.json('Auth_code is empty', { status: 400 })
  }
  // get token from kakao authorization server
  const tokenRes = await fetch('https://kauth.kakao.com/oauth/token', {
    method: 'POST',
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: process.env.KAKAO_CLIENT_ID!,
      client_secret: process.env.KAKAO_CLIENT_SECRET!,
      redirect_uri: `${
        process.env.KAKAO_CALLBACK ?? req.nextUrl.origin
      }/callback`,
      code: code!,
    }),
  })
  const tokenData = (await tokenRes.json()) as KakaoToken

  // get userdata from kakao resouce server
  const preUserData = await fetch('https://kapi.kakao.com/v2/user/me', {
    headers: { Authorization: `Bearer ${tokenData.access_token}` },
  })
  const userData = (await preUserData.json()) as KakaoUserData

  // generate jwt_token
  const jwtToken = jwt.sign(userData, process.env.JWT_SECRET!, {
    expiresIn: '1h',
  })

  const res = NextResponse.redirect(new URL('/', req.url))
  res.cookies.set('jwtToken', jwtToken, {
    httpOnly: true,
    sameSite: true,
    secure: true,
    path: '/',
  })

  return res
}
