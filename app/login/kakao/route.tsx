import { NextRequest, NextResponse } from 'next/server'

export function GET(req: NextRequest) {
  const host = req.headers.get('host')
  return NextResponse.redirect(
    `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=https://${host}/callback`
  )
}
