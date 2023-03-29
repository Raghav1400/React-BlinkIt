import React from 'react'
import Styles from './Location.module.css'

function Location(props) {
  return (
    <div className={Styles['location-info']} >
        <div >Delivery in 10 Minuted</div>
        <select name="lacation" className={Styles['location-option']}>
            {props.locations.map(
              (element)=><option key={element} value={element}>{element}</option>
            )}
        </select>
    </div>
  )
}

export default Location
