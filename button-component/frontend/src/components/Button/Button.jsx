import React from 'react'
import './Button.css'

const Button = (props) => {

    const localGrocery = () =>{
      if(Object.values(props).includes('local_grocery_store')){
        return 'local_grocery_store'
      }  
    }
  return (
    <button className={`${props.variant} ${props.disableShadow?'disableShadow':''} ${props.disabled?'disabled':''} ${localGrocery()} ${props.size} ${props.color}`} disabled={props.disabled}>
        {Object.keys(props).includes('startIcon')?<i class="fa-solid fa-cart-shopping"></i>:''}
        Default
        {Object.keys(props).includes('endIcon')?<i class="fa-solid fa-cart-shopping"></i>:''}
    </button>
  )
}

export default Button
