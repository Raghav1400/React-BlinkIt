import React from 'react'

function button(props) {
    return (
        <button className={props.className}>{props.content}</button>
    )
}

export default button
