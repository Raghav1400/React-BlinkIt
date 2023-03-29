import React from 'react'
import Styles from './Logo.module.css'

function Logo(props) {
  const {src}=props;
  return (
    <div className={Styles['blinkit-logo']}>
        <img src={src} alt='brand-logo'/>
    </div>
  )
}

export default Logo
