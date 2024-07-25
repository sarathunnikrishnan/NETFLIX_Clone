import React from 'react'
import './End.css'

function End() {
  return (
    <div className='end'>
        <label>Questions? Call <a href='#'> 000-800-919-1694</a></label>
        <table>
            <tr>
                <td> <a href='#'>FAQ</a></td>
                <td> <a href='#'>Help Centre</a></td>
                <td> <a href='#'>Account</a></td>    
                <td> <a href='#'>Media Centre</a></td> 
            </tr>
            <tr>
                <td> <a href='#'>Investor Relations</a></td>
                <td> <a href='#'>Jobs</a></td>
                <td> <a href='#'>Ways to Watch</a></td>    
                <td> <a href='#'>Terms of Use</a></td> 
            </tr>
            <tr>
                <td> <a href='#'>Privacy</a></td>
                <td> <a href='#'>Cookie Preferences</a></td>
                <td> <a href='#'>Corporate Information</a></td>    
                <td> <a href='#'>Contact Us</a></td> 
            </tr>
            <tr>
                <td> <a href='#'>Speed Test</a></td>
                <td> <a href='#'>Legal Notices</a></td>
                <td> <a href='#'>Only on Netflix</a></td>    
            </tr>
        </table>
        <select className='end-language'>
        <option>English</option>
        <option> हिंदी</option>
       </select>
       <br/>
       <label>Netflix India</label>
    </div>
  )
}

export default End