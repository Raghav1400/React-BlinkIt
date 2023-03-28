import React from 'react'

function Location(props) {
  return (
    <div id={props.id} >
        <div >Delivery in 10 Minuted</div>
        <select name="lacation" id="location">
            {props.locations.map(
              (element)=><option key={element} value={element}>{element}</option>
            )}
        </select>
    </div>
  )
}

export default Location
