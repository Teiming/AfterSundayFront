import { NextRequest, NextResponse } from 'next/server'
import prisma from '@prisma'

export async function POST(req: NextRequest) {
  // form data
  const formData = await req.formData()
  const title = formData.get('title') as string

  // prisma insert
  const addEvent = await prisma.users.create({
    data: { username: title ?? '제목없음', email: 'asf@adfa.adfa' },
  })

  return NextResponse.redirect(new URL('/test2', req.url))
}
