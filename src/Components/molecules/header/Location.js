import React from 'react'

function Location(props) {
  return (
    // make it a generic component select and drive it via config/props 
    // write css inside that particular folder for that components
    <div id={props.id} >
        <div >Delivery in 10 Minuted</div>
        {/* check here if we need div */}
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
