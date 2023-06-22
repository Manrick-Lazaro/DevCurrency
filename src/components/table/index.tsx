import styles from './table.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface CoinProps {
  symbol: string, 
  show_symbol: boolean,
  delta_24: string,
  volume_24: string,
  market_cap: string,
  name: string,
  rank: number,
  price: string, 
  formatedPrice: string,
  formatedMarket: string
}

interface DataProps {
  coins: CoinProps[]
}

export function Table() {
  const [coins, setCoins] = useState<CoinProps[]>([]);

  useEffect(() => {
    function getData(){
      fetch('https://sujeitoprogramador.com/api-cripto/?key=0125db9f210b2f19&pref=BRL')
      .then(response => response.json())
      .then((data: DataProps) => {
        const coinsList = data.coins.slice(0, 20);

        const price = Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })

        const formatedResult = coinsList.map((data) => {
          const formated = {
            ...data,
            formatedPrice: price.format(Number(data.price)),
            formatedMarket: price.format(Number(data.market_cap))
          }
          return formated
        })
        
        setCoins(formatedResult)
      })
    }
    getData();
  }, [])
  
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