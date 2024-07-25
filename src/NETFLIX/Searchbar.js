import React from 'react'
import './Searchbar.css'

function Searchbar() {
  return (
    <div className='search-bar'>
        <h1>Unlimited movies, TV shows and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
        <input type='text' placeholder='Email address'></input>
        <a href='#'>Get Started </a>
    </div>

    
  )
}

export default Searchbar