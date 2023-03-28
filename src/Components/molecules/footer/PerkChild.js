import React from 'react'

function PerkChild(props) {
  const {img_src,title,description}=props.info;
  return (
    <div className='perk-content'>
        <div className="perk-logo">
            <img src={img_src} alt="perk-info"/>
        </div>
        <div className="perk-heading">{title}</div>
        <div className="perk-data">{description}</div>
    </div>
  )
}

export default PerkChild
