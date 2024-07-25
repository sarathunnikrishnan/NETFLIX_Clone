import React from 'react'
import './Children.css'
import ImgChildren from './AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png'

function Children() {
  return (
    <div>
        <div className='children'>
        
        <div className='children-left'>
        <img src={ImgChildren}></img>
        </div>
        <div className='children-right'>
           <h1>Create profiles for</h1>
           <h1>kids</h1>
           <p>Send children on adventures with their <br/>
            favourite characters in a space made just for <br/>
             them—free with your membership.</p>
        </div>
         
        </div>
    </div>
  )
}

export default Children