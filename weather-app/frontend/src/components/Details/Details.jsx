import React from 'react'
import styles from './Details.module.scss'
import Weather from '../Weather/Weather'

const Details = () => {
  return (
    <div className={styles.container}>
      {/* button */}
      <div className={styles.celcius_fahrenheit}>
        <button className={styles.celcius}>°C</button>
        <button className={styles.fahrenheit}>°F</button>
      </div>
      {/* weather per day */}
      <div className={styles.weather}>
        <Weather/>
      </div>
      {/* today's highlight */}
      <h2>Today's Highlights</h2>
      {/* today's highlight info */}
      <div className={styles.todays_highlight}>
        {/* wind status */}
        <div className={styles.wind_status}>
          <p className={styles.highlight_title}>Wind status</p>
          <p className={styles.highlight_info}>7<span>mph</span> </p>
          <div className={styles.location}>
            <span className={styles.arrow}>
              <i class="fa-solid fa-location-arrow"></i>
            </span>
            <span>
              WSW
            </span>
          </div>
        </div>
        {/* humidity */}
        <div className={styles.humidity}>
          <p className={styles.highlight_title}>Humidity</p>
          <p className={styles.highlight_info}>84<span>%</span> </p>   
          <div className={styles.humidity_percent}>
            {/* label */}
            <div className={styles.label}>
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
            {/* progress bar */}
            <div className={styles.progress_bar}>
              <div className={styles.progress_bar_fill}></div>
            </div>
            {/* percent sign */}
            <div className={styles.percent_sign}>%</div>
          </div>       
        </div>
        {/* visibility */}
        <div className={styles.visibility}>
          <p className={styles.highlight_title}>Visibility</p>
          <p className={styles.highlight_info}>6,4<span> miles</span></p>    
        </div>
        {/* air pressure */}
        <div className={styles.air_pressure}>
          <p className={styles.highlight_title}>Air Pressure</p>
          <p className={styles.highlight_info}>998<span> mb</span></p>    
        </div>
      </div>
    </div>
  )
}

export default Details
