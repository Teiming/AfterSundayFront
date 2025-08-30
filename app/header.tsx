import Link from 'next/link'
import LoginBtn from './LoginBtn'
import styles from './root.module.css'

export default function Header() {
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
        <LoginBtn />
      </div>
    </header>
  )
}
