import React from 'react'
import Styles from './SocialInfo.module.css'

function SocialInfo(props) {
  return (
    <div className={Styles['social-logo']}>
      {
        props.socialInfo.map(
          (element)=>{
            return <img key={element.alt} src={element.img_src} alt={element.alt}/>
          }
        )
      
      }
    </div>
  )
}

export default SocialInfo
