import React from 'react'

import Perks from './FooterComponents/Perks'
import ExtraInfo from './FooterComponents/ExtraInfo'
import ContactInfo from './FooterComponents/ContactInfo'

function Footer() {
    var info="Blinkit is owned & managed by Blink Commerce Private Limited (formerly known as Grofers India Private Limited) and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited."
  return (
    <footer>
        <Perks/>
        <ExtraInfo id='extra-info' info={info} />
        <ContactInfo />
    </footer>
  )
}

export default Footer
