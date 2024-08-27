import React, { useState } from 'react'
import ReactDom from 'react-dom'
import './Modal.css'

const Modal = ({open,close,handleChange,locationGuests,increaseAdults, decreaseAdults, increaseChildren, decreaseChildren, searchRoom}) => {
    const [openLocation, setOpenLocation] = useState(false)
    const [openGuests, setOpenGuests] = useState(false)

    if(!open){
        return null
    }

  return ReactDom.createPortal(
    <>
        <div className="overlay" onClick={close}></div>
        <div className='modal-container'>
            <div className="modal-content container">
                {/* row for the buttons */}
                <div className="input-box row">
                    <div className="close-edit-modal col-12">
                        <p className='m-0'>Edit your search</p>
                        <button className="mobile-exit" onClick={close}>
                            <i class="fa-solid fa-x"></i>
                        </button>
                        
                    </div>
                    <div className='modal-location col-md-4'>
                        {/* location button */}
                        <button className='location-button' onClick={()=>{
                            setOpenLocation(!openLocation)
                            setOpenGuests(false)
                            }}>
                            <span>location</span>
                            <p className='m-0'>{locationGuests.location!=''?locationGuests.location:'Helsinki'}, Finland</p>
                        </button>
                    </div>
                    <div className='modal-guests col-md-4'>
                        <button className='guests-button' onClick={()=>{
                            setOpenGuests(!openGuests)
                            setOpenLocation(false)
                            }}>
                            <span>guests</span>
                            <p className='m-0'>{locationGuests.totalGuests==0?"Add":locationGuests.totalGuests} {locationGuests.totalGuests==1?'guest':'guests'}</p>
                        </button>
                    </div>
                    <div className='modal-search col-md-4'>
                        <button className='search-button' onClick={()=>{searchRoom(); close();}}>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <span>Search</span>
                        </button>
                    </div>
                </div>
                {/* choices */}
                <div className="modal-choices row">
                    {/* location */}
                    {openLocation?<div className="location-choice col-md-4">
                        {/* helsinki, finland */}
                        <label htmlFor="helsinki">
                            <input type="radio" name="location" value='Helsinki' id="helsinki" onClick={handleChange}/>
                            <i class="fa-solid fa-location-dot"></i>
                            <span>Helsinki, Finland</span>
                        </label>
                        {/* turku, finland */}
                        <label htmlFor="turku">
                            <input type="radio" name="location" value='Turku' id="turku" onClick={handleChange}/>
                            <i class="fa-solid fa-location-dot"></i>
                            <span>Turku, Finland</span>
                        </label>
                        {/* oulu, finland */}
                        <label htmlFor="oulu">
                            <input type="radio" name="location" value='Oulu' id="oulu" onClick={handleChange}/>
                            <i class="fa-solid fa-location-dot"></i>
                            <span>Oulu, Finland</span>
                        </label>
                        {/* vaasa, finland */}
                        <label htmlFor="vaasa">
                            <input type="radio" name="location" value='Vaasa' id="vaasa" onClick={handleChange} />
                            <i class="fa-solid fa-location-dot"></i>
                            <span>Vaasa, Finland</span>
                        </label>
                    </div>:<div className='col-md-4'></div>}
                    {/* guests */}
                    {openGuests?<div className="guests-filter col-md-4">
                        {/* adults */}
                        <div className="adults">
                            <p className='adults-text m-0'>Adults</p>
                            <p className='adults-description mb-2'>Age 13 or above</p>
                            <div className='adults-button'>
                                <button className='decrease-button' disabled={locationGuests.adults==0?true:false} onClick={decreaseAdults}>-</button>
                                <span className='adults-total'>{locationGuests.adults}</span>
                                <button className='increase-button' onClick={increaseAdults}>+</button>
                            </div>
                        </div>
                        {/* children */}
                        <div className="children">
                            <p className='m-0 children-text'>Children</p>
                            <p className='mb-2 children-description'>Age 2-12</p>
                            <div className='children-button'>
                                <button className='decrease-button' disabled={locationGuests.children==0?true:false} onClick={decreaseChildren}>-</button>
                                <span className='children-total'>{locationGuests.children}</span>
                                <button className='increase-button' onClick={increaseChildren}>+</button>
                            </div>

                        </div>
                    </div>:<div className='col-md-4'></div>}
                    <div className='mobile-modal-search col-12'>
                        <button className='mobile-search-button' onClick={()=>{searchRoom(); close();}}>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <span>Search</span>
                        </button>
                    </div>
                </div>
            </div>

        
        </div>
    </>,
    document.getElementById('modal')
  )
}

export default Modal
