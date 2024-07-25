import React from 'react'
import './EnjoyOnYourTv.css'
import img from'./tv.png'

function EnjoyOnYourTv() {
  return (
    <div className='enjoy'>
        
       <div className='left'>
        <h1>Enjoy on your TV</h1>
        <p>Watch on smart TVs, PlayStation, Xbox,<br/> Chromecast, Apple TV, Blu-ray players and<br/> more.</p>
       </div>
       <div className='right'>
          <img src={img}></img>
       </div>
        
    </div>
  )
  }

export default EnjoyOnYourTv;