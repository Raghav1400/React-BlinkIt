import React from 'react'
import {ExtraInfo,SocialInfo,DownloadInfo} from '../../../../molecules/footer'
import { connect } from 'react-redux'
import Styles from './ContactInfo.module.css'

function ContactInfo(props) {
  const COPYWRITE = "© Blink Commerce Private Limited (formerly known as Grofers India Private Limited), 2016-2023"
  return (
    <div className={Styles['contact-info']}>
      <ExtraInfo className='extra-info-note' info={COPYWRITE}/>
      <DownloadInfo downloadInfo={props.downloadInfo} />
      <SocialInfo socialInfo={props.socialInfo}/>
    </div>
  )
}

const mapStateToProps =(state,props)=> {
  return {
      socialInfo:state.socialInfo.socialInfo,
      downloadInfo:state.downloadInfo.downloadInfo
  }
}
export default connect(mapStateToProps,null)(ContactInfo)