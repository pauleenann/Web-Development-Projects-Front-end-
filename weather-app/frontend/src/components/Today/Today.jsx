import React, { useState } from 'react'
import styles from './Today.module.scss'
import shower from '../../assets/Shower.png'
import cloudBg from '../../assets/Cloud-background.png'
import Modal from '../Modal/Modal'

const Today = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.container}>
      {/* search row */}
      <div className={styles.search}>
        <button className={styles.search_button} onClick={()=>setOpen(!open)}>Search for places</button>
        <button className={styles.current_location}>
          <i class="fa-solid fa-location-crosshairs"></i>
        </button>
      </div>
      {/* images row */}
      <div className={styles.weather_icon}>
        <img src={cloudBg} alt="" className={styles.bg}/>
        <div className={styles.weather_today_icon}>
          <img src={shower} alt="" />
        </div>
      </div>
      {/* weather information */}
      <div className={styles.weather_info}>
          <div className={styles.weather_degree}>
            15<span>°C</span> 
          </div>
          <div className={styles.weather_today}>
            Shower
          </div>
          <div className={styles.current_date_location}>
            <div>
              Today • Fri, 5 June
            </div>
            <div className={styles.location}>
              <i class="fa-solid fa-location-dot"></i>
              Helsinki
            </div>

          </div>

      </div>
      
      <Modal open={open}/>
    </div>
  )
}

export default Today
