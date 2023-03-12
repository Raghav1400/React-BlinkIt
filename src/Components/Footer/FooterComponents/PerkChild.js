import React from 'react'

function PerkChild(props) {
  return (
    <div className='perk-content'>
        <div className="perk-logo">
            <img src={props.info.img_src} alt=""/>
        </div>
        <div className="perk-heading">{props.info.title}</div>
        <div className="perk-data">{props.info.description}</div>
    </div>
  )
}

export default PerkChild
