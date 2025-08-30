import { NextRequest, NextResponse } from 'next/server'

export function GET(req: NextRequest) {
  return NextResponse.redirect(
    `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
      process.env.KAKAO_CLIENT_ID
    }&redirect_uri=${process.env.KAKAO_CALLBACK ?? req.nextUrl.origin}/callback`
  )
}
