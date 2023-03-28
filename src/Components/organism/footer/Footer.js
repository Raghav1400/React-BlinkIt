import React from 'react'
import copyrightInfo from '../../../data/copyrightInfo.json'
import Perks from './Perks'
import {ExtraInfo} from '../../molecules/footer'
import ContactInfo from './ContactInfo'

function Footer() {
  return (
    <footer>
        <Perks/>
        <ExtraInfo id='extra-info' info={copyrightInfo} />
        <ContactInfo />
    </footer>
  )
}

export default Footer
