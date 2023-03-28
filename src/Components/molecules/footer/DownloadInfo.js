import React from 'react'

function DownloadInfo(props) {
  return (
    <div id="download-info">
        <div>Download Apps</div>
        {
          props.downloadInfo.map(
            (element)=>{
              console.log(element);
              return <img key={element.alt} src={element.src} alt={element.alt}/>;
            }
          )
        }
    </div>
  )
}

export default DownloadInfo
