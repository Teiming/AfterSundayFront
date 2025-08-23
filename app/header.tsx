import Link from 'next/link'
import LoginBtn from './LoginBtn'
import styles from './root.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerTitle}>
          <Link href='/'>AfterSunday</Link>
        </div>
        <LoginBtn />
      </div>
    </header>
  )
}
