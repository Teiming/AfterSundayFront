import { cookies } from 'next/headers'
import Link from 'next/link'
import LoginBtn from './LoginBtn'
import jwt from 'jsonwebtoken'
import styles from './root.module.css'

export interface KakaoUserData {
  id: Number
  connected_at: string
  kakao_account: { name: string }
}

export default async function Header() {
  const cookieStore = await cookies()
  const jwtToken = cookieStore.get('jwtToken')?.value

  let username
  try {
    const userdata = (await jwt.verify(
      jwtToken!,
      process.env.JWT_SECRET!
    )) as KakaoUserData
    username = <h4>{userdata.kakao_account.name}님</h4>
  } catch (error) {
    console.log(error)
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerTitle}>
          <Link href='/'>
            <h2 style={{ fontFamily: 'YeogiOttaeJalnanGothic' }}>
              애프터선데이
            </h2>
          </Link>
        </div>
        <div className={styles.headerAction}>
          {username}
          {username ? null : <LoginBtn />}
        </div>
      </div>
    </header>
  )
}
