import styles from '../styles/page3.module.css'

export default function Coming () {
  return (
    <div className={styles.box}>
      <style jsx global>{`
        body {
          background-color: #009999;
        }
    `}</style>
      <h1>COMING SOON</h1>
      <p>
        NEW WEBSITE IS AVAILABLE<br />
        ON 20XX.01.01
      </p>
    </div>
  )
}
