import { NextRequest, NextResponse } from 'next/server'

export function GET() {
  const res = NextResponse.json({})
  return res
}

export function POST(req: NextRequest) {
  console.log(req)
  const dsfsf: BodyInit = 'sdfsf'
  const res = new NextResponse(dsfsf)
  return res
}
