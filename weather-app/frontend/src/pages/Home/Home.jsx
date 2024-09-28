import React from 'react'
import Today from '../../components/Today/Today'
import styles from './Home.module.scss'
import Details from '../../components/Details/Details'


const Home = () => {
  return (
    <div className={styles.home_container}>
      <Today/>
      <Details/>
    </div>
  )
}

export default Home
