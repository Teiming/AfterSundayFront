import styles from './root.module.css'

export default function Page() {
  return (
    <>
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
    </>
  )
}
