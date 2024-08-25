import React, { useEffect, useState } from 'react'
import './HomePage.css'
import logo from '../../assets/logo.png'
import axios from 'axios'
import Card from '../../components/Card/Card'


const HomePage = () => {
  const [data,setData] = useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData = async()=>{
    try{
      const res = await axios.get('stays.json')
      setData(res.data)
    }catch(err){

    }
  }

  console.log(data)


  return (
    <div className='homepage-container container'>
      <div className="row">
        {/* logo */}
        <div className="col-md-6 logo-container">
          <img src={logo} alt="" />
        </div>
        {/* search button */}
        <div className="col-md-6 search-button-box">
          <button className='search-button'>
              <div className="location m-0">Helsinki, Finland</div>
              <div className="separator"></div>
              <div className="guests m-0">Add guests</div>
              <div className="separator"></div>
              <div className="search-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
          </button>
        </div>
        {/* header text */}
        <div className="col-md-6 header-text">
          <p>Stays in <span>Finland</span></p>
        </div>
        {/* total resulta */}
        <div className="col-md-6 total-results">
        12+ stays
        </div>

        {/* rooms */}
        <div className="col-12">
          <div className="row">
            {data.map((item,key)=>{
              return(
                <div className="col-md-4 card-holder">
                  <Card  city={item.city} country={item.country} beds={item.beds} superHost={item.superHost} title={item.title} rating={item.rating} maxGuests={item.maxGuests} type={item.type} photo={item.photo}/>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomePage
