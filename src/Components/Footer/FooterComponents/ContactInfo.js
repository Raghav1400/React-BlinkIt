import React from 'react'
import ExtraInfo from './ExtraInfo'
import DownloadInfo from './DownloadInfo'
import SocialInfo from './SocialInfo'

function ContactInfo() {
    var info="© Blink Commerce Private Limited (formerly known as Grofers India Private Limited), 2016-2023"
  return (
    <div id='contact-info'>
      <ExtraInfo id='extra-info-note'info={info}/>
      <DownloadInfo />
      <SocialInfo/>
    </div>
  )
}

export default ContactInfo
