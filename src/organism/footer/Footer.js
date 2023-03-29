import React from 'react'
import copyrightInfo from '../../data/copyrightInfo.json'
import {ExtraInfo} from '../../molecules/footer'
import {ContactInfo,Perks} from './organism'
import './Footer.module.css'

function Footer() {
  return (
    <footer>
        <Perks/>
        <ExtraInfo className='extra-info' info={copyrightInfo} />
        <ContactInfo />
    </footer>
  )
}

export default Footer
