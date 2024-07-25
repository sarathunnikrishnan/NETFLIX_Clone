import React from 'react'
import logo from './pngimg.com - netflix_PNG11.png'
import languageIcon from './{373DBBAD-B79F-4AB9-ADF1-93FFA8763DDA}.png.jpg'
import './Navbar.css'

function Navbar() {
  return (
    <div>

      <nav className='nav'>
       <img src= {logo} alt='Netflix' className='nav-logo' ></img>
       <div className='nav-lan-btn'>
       <select>
        <option>English<img src={languageIcon}></img></option>
        <option> हिंदी</option>
       </select>
       <button>Sign In</button>
       </div>
       </nav>
    </div>
  )
}

export default Navbar