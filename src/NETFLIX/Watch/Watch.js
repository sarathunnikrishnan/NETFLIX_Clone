import React from 'react'
import './Watch.css'
import ImgWatch from './device-pile-in.png'

function Watch() {
  return (
    <div>
        <div className='watch'>
        
        <div className='watch-left'>
         <h1>Watch everywhere</h1>
         <p>Stream unlimited movies and TV shows on <br/>your phone, tablet, laptop, and TV.</p>
        </div>
        <div className='watch-right'>
           <img src={ImgWatch}></img>
        </div>
         
        </div>
    </div>
  )
}

export default Watch