import React from 'react'

function SocialInfo(props) {
  return (
    <div id="social-logo">
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
