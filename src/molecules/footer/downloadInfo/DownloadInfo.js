import React from 'react'
import Style from './DownloadInfo.module.css'

function DownloadInfo(props) {
  return (
    <div className={Style['download-info']}>
        <div>Download Apps</div>
        {
          props.downloadInfo.map(
            (element)=>{
              return <img key={element.alt} src={element.src} alt={element.alt}/>;
            }
          )
        }
    </div>
  )
}

export default DownloadInfo
