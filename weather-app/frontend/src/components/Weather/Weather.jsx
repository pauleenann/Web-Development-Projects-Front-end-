import React from 'react'
import styles from './Weather.module.scss'
import clear from '../../assets/Clear.png'

const Weather = () => {
  return (
    <div className={styles.weather_box}>
      <p>Tomorrow</p>
      <img src={clear} alt="" />
      <div className={styles.weather_degree}>
        <p className={styles.celcius1}>11°C</p>
        <p className={styles.celcius2}>11°C</p>
      </div>
    </div>
  )
}

export default Weather
