import Link from 'next/link'
import styles from './root.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div>AfterSunday</div>
        <div>
          <Link href='./login'>로그인</Link>
        </div>
      </div>
    </header>
  )
}
