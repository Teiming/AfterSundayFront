import { cookies, headers } from 'next/headers'
import Link from 'next/link'
import LoginBtn from './LoginBtn'
import styles from './root.module.css'

export default async function Header() {
  const header = await headers()
  const at = header.get('Access-Token')
  console.log({ at })

  const cookieStore = await cookies()
  const refresh = cookieStore.get('Refresh-Token')?.value
  console.log({ refresh })

  let username
  if (refresh) {
    username = <h4>님</h4>
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerTitle}>
          <Link href='/'>
            <h2 style={{ fontFamily: 'YeogiOttaeJalnanGothic, -apple-system' }}>
              애프터선데이
            </h2>
          </Link>
        </div>
        <div className={styles.headerAction}>{username ?? <LoginBtn />}</div>
      </div>
    </header>
  )
}
