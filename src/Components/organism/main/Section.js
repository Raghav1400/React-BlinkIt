import React from 'react'
import {GeneralInfo} from '../../molecules/main/'
import CardsContainer from './CardsContainer'

const Section =(props)=>{
    return (
      <section>
        <GeneralInfo />
        <CardsContainer category={props.category} subcategory={props.subcategory}/>
      </section>
    )
}

export default Section
