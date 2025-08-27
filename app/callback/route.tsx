import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code')

  const tokenRes = await fetch('https://kauth.kakao.com/oauth/token', {
    method: 'POST',
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: process.env.KAKAO_CLIENT_ID!,
      client_secret: process.env.KAKAO_CLIENT_SECRET!,
      redirect_uri: req.nextUrl.origin + '/callback',
      code: code!,
    }),
  })
  const tokenData = await tokenRes.json()

  const userRes = await fetch('https://kapi.kakao.com/v2/user/me', {
    headers: { Authorization: `Bearer ${tokenData.access_token}` },
  })
  const userData = await userRes.json()

  const jwtToken = jwt.sign(
    { id: userData.id, name: userData.kakao_account.name },
    process.env.JWT_SECRET!,
    { expiresIn: '1h' }
  )

  const res = NextResponse.redirect(new URL('/', req.url))
  res.cookies.set('jwtToken', jwtToken, {
    httpOnly: true,
    secure: true,
    path: '/',
  })

  return res
}
