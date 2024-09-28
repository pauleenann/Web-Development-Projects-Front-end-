import React from 'react'
import styles from './Modal.module.scss'
import ReactDom from 'react-dom'

const Modal = ({open}) => {

    if(!open){
        return null
    }
  return ReactDom.createPortal(
    <div className={styles.container}>
      
    </div>,
    document.getElementById('portal')
  )
}

export default Modal
