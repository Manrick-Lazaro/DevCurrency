import styles from './header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'

export function Header() {
  return(
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <Link to='/'>
          <img src={logo} alt="imagem da logo" className={styles.logo} />
        </Link>
      </div>
    </header>
  )
}