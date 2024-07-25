import React from 'react'
import './DownloadShows.css'
import ImgMobile from './mobile-0819.jpg'
import ImgMovie from './boxshot.png'
import ImgDownload from './download-icon.gif'

function DownloadShows() {
  return (
    <div  className='download'>
       <div className='download-left'>
        <img src={ImgMobile}></img>
        <div className='download-btn'>
            <img className='boxshot' src={ImgMovie}></img>
            <h4>Stranger Things</h4>
            <h5>Downloading...</h5>
            <img className='download-icon' src={ImgDownload}></img>
        </div>
       </div>
       <div className='download-right'>
       <h1>Download your</h1>
       <h1>shows to watch</h1>
       <h1>offline</h1>
       <p>Save your favourites easily and always have <br/> something to watch.</p>
       </div>
    </div>
  )
}

export default DownloadShows