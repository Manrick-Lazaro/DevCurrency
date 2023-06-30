import styles from './table.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from '../loader';

interface CoinProps {
  symbol: string, 
  show_symbol: boolean,
  delta_24h: string,
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
  const [loading, setLoading] = useState(true)

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
        setLoading(false)
      })
    }
    getData();
  }, [])
  
  if(loading) {
    return (
      <Loader />
    )
  }

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
          {coins.map(item => (
            <tr key={item.name} className={styles.lineTableBody}>
              <td className={styles.columnTableBody} data-label='Moeda'>
                <Link to={`/detail/${item.symbol}`} className={styles.link}>
                  <span>{ item.name }</span> | { item.symbol }
                </Link>
              </td>
              <td className={styles.columnTableBody} data-label='Mercado'>
                { item.formatedMarket }
              </td>
              <td className={styles.columnTableBody} data-label='Preço'>
                { item.formatedPrice }
              </td>
              <td className={(item.delta_24h) <= "0" ? styles.loss : styles.profit} data-label='Volume'>
                <span>{ item.delta_24h }</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}