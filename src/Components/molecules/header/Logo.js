import React from 'react'

function Logo(props) {
  const {id,src}=props;
  return (
    <div id={id}>
        <img src={src} alt=''/>
    </div>
  )
}

export default Logo
