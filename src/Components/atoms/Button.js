import React from 'react'

function button(props) {
    return (
        <button id={props.id}>{props.content}</button>
    )
}

export default button
