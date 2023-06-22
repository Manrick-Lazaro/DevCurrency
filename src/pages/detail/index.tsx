import { useParams } from 'react-router-dom';
import styles from './detail.module.css';
 
export function Detail() {
  const { cripto } = useParams();

  return(
    <div>
      <h1>detail page</h1>
    </div>
  )
}