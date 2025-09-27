import styles from './root.module.css'

function Headline({ title }: { title: string }) {
  return <h3 style={{ padding: '0.5rem' }}>{title}</h3>
}

export default function Page() {
  return (
    <>
      <main className={styles.main}>
        <Headline title='참가자가 많은 이벤트' />
        <Headline title='최근에 개설된 이벤트' />
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
