import React from 'react'
import styles from './Button.module.css'
function button(props) {
    return (
        <button className={styles[props.type]}>{props.label}</button>
    )
}

export default button
