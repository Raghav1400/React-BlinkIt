import React from 'react'
import {SortFilter} from './molecule'
import Styles from './GeneralInfo.module.css'
const GeneralInfo =(props)=>{
    return (
      <div className={Styles['generalInfo']}>
        <div>Buy Fresh Grocery Items</div>
        <SortFilter/>
      </div>
    )
}

export default GeneralInfo
