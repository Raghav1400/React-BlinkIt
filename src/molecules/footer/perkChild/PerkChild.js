import React from 'react'
import Styles from './PerkChild.module.css'

function PerkChild(props) {
  const {img_src,title,description}=props.info;
  return (
    <div className={Styles['perk']}>
        <div className={Styles["perk-logo"]}>
            <img src={img_src} alt="perk-info"/>
        </div>
        <div className={Styles["perk-heading"]}>{title}</div>
        <div className={Styles["perk-data"]}>{description}</div>
    </div>
  )
}

export default PerkChild
