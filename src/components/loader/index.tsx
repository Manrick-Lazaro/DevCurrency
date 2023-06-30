import styles from "./loader.module.css"

export function Loader() {
  return (
    <div className={styles.spinner_container}>
      <div className={styles.spinner_load}></div>
    </div>
  )
}