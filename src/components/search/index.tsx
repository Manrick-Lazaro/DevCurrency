import styles from './search.module.css';
import { FiSearch } from 'react-icons/fi';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Search() { 
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function HandleSubmite(e: FormEvent) {
    e.preventDefault();

    if(input === "") return;

    navigate(`/detail/${input}`)
  }

  return(
    <div className={styles.container}>
      <form className={styles.form} onSubmit={HandleSubmite}>
        <input 
          className={styles.input}
          type="text"
          placeholder='BTC...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          <FiSearch className={styles.iconButton}/>
        </button>
      </form>
    </div>
  )
}