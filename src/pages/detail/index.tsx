import { Loader } from '../../components/loader';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './detail.module.css';

interface CoinProp {
  symbol: string,
  name: string,
  price: string,
  market_cap: string,
  low_24h: string,
  high_24h: string, 
  total_volume_24h: string,
  delta_24h: string,
  formatedPrice: string,
  formatedMarket: string,
  formatedLowprice: string,
  formatedHighprice: string,
  error?: string
}

export function Detail() {
  const { cripto } = useParams();
  const [coinDetail, setCoinDetail] = useState<CoinProp>()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    function getCoin() {
      fetch(`https://sujeitoprogramador.com/api-cripto/coin/?key=0125db9f210b2f19&symbol=${cripto}`)
      .then(response => response.json())
      .then((data:CoinProp) => {
        const price = Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })

        if(data.error) {
          navigate("/")
        }

        const resultData = {
          ...data,
          formatedPrice: price.format(Number(data.price)),
          formatedMarket: price.format(Number(data.market_cap)),
          formatedLowprice: price.format(Number(data.low_24h)),
          formatedHighprice: price.format(Number(data.high_24h)),
        }

        setCoinDetail(resultData)
        setLoading(false)
      })
    }

    getCoin()
  }, [cripto])

  if(loading === true) {
    return (
      <Loader />
    )
  }

  return(
    <div className={styles.container}>
      <h1 className={styles.title}>{coinDetail?.name}</h1>
      <p className={styles.symbol}>{coinDetail?.symbol}</p>

      <section className={styles.information_coin}>
        <p><strong>Price:</strong>{coinDetail?.formatedPrice}</p>
        <p><strong>Value Market:</strong>{coinDetail?.formatedMarket}</p>
        <p><strong>Max value:</strong>{coinDetail?.formatedHighprice}</p>
        <p><strong>Min value:</strong>{coinDetail?.formatedLowprice}</p>
        <p><strong>Total volume:</strong>{coinDetail?.total_volume_24h}</p>
        <p>
          <strong>Delta 24h:</strong>
          <span className={String(coinDetail?.delta_24h) <= "0" ? styles.loss : styles.profit}>
            {coinDetail?.delta_24h}
          </span>
        </p>
      </section>
    </div>
  )
}