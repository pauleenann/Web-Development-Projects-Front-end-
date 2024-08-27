import React, { useEffect, useState } from 'react'
import './HomePage.css'
import logo from '../../assets/logo.png'
import axios from 'axios'
import Card from '../../components/Card/Card'
import Modal from '../../components/Modal/Modal'


const HomePage = () => {
  const [data,setData] = useState([])
  const [open, setOpen] = useState(false)
  const [locationGuests, setLocationGuests] = useState({
    location:'Helsinki',
    adults:0,
    children:0,
    totalGuests:0
  })
  const [search, setSearch] = useState({});
  const [totalStays,setTotalStays] = useState(0)
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setLocationGuests({...locationGuests, [name]:value});
  }

  //this runs for the first render and everytime search state changes
  useEffect(()=>{
    getData()

    if(Object.keys(search).length===0){
      setTotalStays(12)
    }else{
      let total=0
      data.map((item,key)=>{
        if(item.city==search.location&&search.totalGuests<=item.maxGuests){
          total = total+1
        }
      })
      setTotalStays(total)
    }
  },[search])



  const getData = async()=>{
    try{
      const res = await axios.get('stays.json')
      setData(res.data)
    }catch(err){

    }
  }

  const increaseAdults = ()=>{
    setLocationGuests((prev)=>({
      ...prev,
      adults:prev.adults+1,
      totalGuests:prev.totalGuests+1
    }))
  }

  const decreaseAdults = ()=>{
    setLocationGuests((prev)=>({
      ...prev,
      adults:prev.adults-1,
      totalGuests:prev.totalGuests-1
    }))
  }

  const increaseChildren = ()=>{
    setLocationGuests((prev)=>({
      ...prev,
      children:prev.children+1,
      totalGuests:prev.totalGuests+1
    }))
  }

  const decreaseChildren = ()=>{
    setLocationGuests((prev)=>({
      ...prev,
      children:prev.children-1,
      totalGuests:prev.totalGuests-1

    }))
  }

  const searchRoom = ()=>{

    setSearch(locationGuests)
  }

  console.log(search)   

  return (
    <div className='homepage-container container'>
      <div className="row">
        {/* logo */}
        <div className="col-md-6 logo-container col-12">
          <img src={logo} alt="" />
        </div>
        {/* search button */}
        <div className="col-md-6 search-button-box col-12">
          <button className='search-button' onClick={()=>setOpen(!open)}>
              <div className="location m-0">{locationGuests.location?locationGuests.location:'Helsinki'}, Finland</div>
              <div className="separator"></div>
              <div className="guests m-0">{!locationGuests.totalGuests?"Add":locationGuests.totalGuests} {locationGuests.totalGuests==1?'guest':'guests'}</div>
              <div className="separator"></div>
              <div className="search-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
          </button>
        </div>
        {/* header text */}
        <div className="col-8 header-text">
          <p className='m-0'>Stays in <span>Finland</span></p>
        </div>
        {/* total resulta */}
        <div className="col-4 total-results">
        {totalStays==12?`${totalStays}+ stays`:totalStays<=1?`${totalStays} stay`:`${totalStays} stays`} 
        </div>

        {/* rooms */}
        <div className="col-12">
          <div className="row home-card-box">
            {data.map((item,key)=>{
              if(item.city==search.location&&search.totalGuests<=item.maxGuests){
                return(
                  <div className="col-md-4 card-holder">
                    <Card  city={item.city} country={item.country} beds={item.beds} superHost={item.superHost} title={item.title} rating={item.rating} maxGuests={item.maxGuests} type={item.type} photo={item.photo}/>
                  </div>
                )
              }else if(!search.location){
                return(
                  <div className="col-md-4 card-holder">
                    <Card  city={item.city} country={item.country} beds={item.beds} superHost={item.superHost} title={item.title} rating={item.rating} maxGuests={item.maxGuests} type={item.type} photo={item.photo}/>
                  </div>
                )
                
              }
            })}
          </div>
        </div>
      </div>
      <Modal open={open} close={()=>setOpen(false)} handleChange={handleChange} locationGuests={locationGuests} increaseAdults={increaseAdults} decreaseAdults={decreaseAdults} increaseChildren={increaseChildren} decreaseChildren={decreaseChildren} searchRoom={searchRoom}/>
    </div>
  )
}

export default HomePage
