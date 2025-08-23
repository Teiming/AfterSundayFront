import styles from './root.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div>AfterSunday</div>
        <div>
          <a href='./login'>로그인</a>
        </div>
      </div>
    </header>
  )
}
