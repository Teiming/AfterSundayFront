export default function Page() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div>AfterSunday</div>
          <div>로그인</div>
        </div>
      </header>
      <main className={styles.main}>
        <div>
          <h2>hello, world</h2>
        </div>
      </main>
      <div className={styles.controller}>
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div>
          <h4>After Sunday Project</h4>
          <h6>admin@aftsunday.com</h6>

          <p style={{ fontSize: '8pt', marginTop: '1rem' }}>
            'not neglecting to{' '}
            <b>
              <i>meet together</i>
            </b>
            , as is the habit of some, but encouraging one another, and all the
            more as you see the Day drawing near.' —&nbsp;Hebrews 10:25 ESV
          </p>
        </div>
      </footer>
    </>
  )
}
