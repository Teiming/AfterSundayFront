import { NextRequest, NextResponse } from 'next/server'
import prisma from '@prisma'

export async function POST(req: NextRequest) {
  // form data
  const formData = await req.formData()
  // const host = formData.get('host') as string
  const title = formData.get('title') as string
  const date = formData.get('date') as string
  const start = formData.get('start') as string
  const end = formData.get('end') as string

  // prisma insert
  await prisma.events.create({
    data: {
      host_id: 1, // Fix
      title,
      start_time: new Date(`${date}T${start}:00+09:00`).toISOString(),
      end_time: new Date(`${date}T${end}:00+09:00`).toISOString(),
    },
  })

  return NextResponse.redirect(new URL('/test', req.url))
}
