import React from 'react'
import {GeneralInfo} from '../../../../molecules/main'
import {CardsContainer} from './organism/cardContainer'
import './Section.module.css'

const Section =(props)=>{
    return (
      <section>
        <GeneralInfo />
        <CardsContainer category={props.category} subcategory={props.subcategory}/>
      </section>
    )
}

export default Section
