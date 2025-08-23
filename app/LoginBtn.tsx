'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LoginBtn() {
  const path = usePathname()
  return path == '/login' ? null : (
    <div>
      <Link href='./login'>로그인</Link>
    </div>
  )
}
