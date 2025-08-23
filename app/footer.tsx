import styles from './root.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h4>After Sunday Project</h4>
        <h6>admin@aftsunday.com</h6>

        <p style={{ fontSize: '8pt', marginTop: '1rem' }}>
          'not neglecting to
          <b>
            <i>meet together</i>
          </b>
          , as is the habit of some, but encouraging one another, and all the
          more as you see the Day drawing near.' —&nbsp;Hebrews 10:25 ESV
        </p>
      </div>
    </footer>
  )
}
