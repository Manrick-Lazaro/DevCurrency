import styles from './table.module.css';
import { Link } from 'react-router-dom';

export function Table() {
  return(
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">Moeda</th>
            <th scope="col">Valor de mercado</th>
            <th scope="col">Preço</th>
            <th scope="col">Volume</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          <tr className={styles.lineTableBody}>
            <td className={styles.columnTableBody} data-label='Moeda'>
              <Link to='' className={styles.link}>
                <span>Bitcoin</span> | BTC
              </Link>
            </td>
            <td className={styles.columnTableBody} data-label='Mercado'>
              R$ 5000.00
            </td>
            <td className={styles.columnTableBody} data-label='Preço'>
              R$ 20
            </td>
            <td className={styles.columnTableBodyProfit} data-label='Volume'>
              <span>-5.3</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}