import React from 'react'

function Location(props) {
  return (
    <div id={props.id} >
        <div >Delivery in 10 Minuted</div>
        <div id="header-location">
            <select name="lacation" id="location">
                <option value="Delhi India">Delhi India</option>
                <option value="Delhi India">Delhi India</option>
                <option value="Delhi India">Delhi India</option>
            </select>
        </div>
    </div>
  )
}

export default Location
