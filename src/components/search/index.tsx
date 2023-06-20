import styles from './search.module.css';
import { FiSearch } from 'react-icons/fi';

export function Search() {
  return(
    <div className={styles.container}>
      <form className={styles.form}>
        <input 
          className={styles.input}
          type="text"
          placeholder='BTC...'

        />
        <button type="submit" className={styles.button}>
          <FiSearch className={styles.iconButton}/>
        </button>
      </form>
    </div>
  )
}