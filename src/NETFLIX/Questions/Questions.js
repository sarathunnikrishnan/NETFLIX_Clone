import React from 'react'
import './Questions.css'

function Questions() {
  return (
    <div className='questions'>
         <h1>Frequently Asked Questions</h1>
         <ul  className='accordion'>
            <li>
                <input type='radio' name='accordion' id='first'></input>
                <label for="first">What is Netflix?</label>
                <div className='question-content'>
                       <p>
                       Netflix is a streaming service that offers a wide variety of award-winning TV shows, <br/>
                        movies, anime, documentaries and more – on thousands of internet-connected devices.
                       </p>
                       <p>
                       You can watch as much as you want, whenever you want, without a single ad – all for one <br/>
                       low monthly price. There's always something new to discover, and new TV shows and <br/>
                        movies are added every week!
                       </p>
                </div>
            </li>
            <li>
                <input type='radio' name='accordion' id='second'></input>
                <label for="second">How much does Netflix cost?</label>
                <div className='question-content'>
                       <p>
                       Netflix is a streaming service that offers a wide variety of award-winning TV shows, <br/>
                        movies, anime, documentaries and more – on thousands of internet-connected devices.
                       </p>
                       <p>
                       You can watch as much as you want, whenever you want, without a single ad – all for one <br/>
                       low monthly price. There's always something new to discover, and new TV shows and <br/>
                        movies are added every week!
                       </p>
                </div>
            </li>
            <li>
                <input type='radio' name='accordion' id='third'></input>
                <label for="third">Where can i watch?</label>
                <div className='question-content'>
                       <p>
                       Netflix is a streaming service that offers a wide variety of award-winning TV shows, <br/>
                        movies, anime, documentaries and more – on thousands of internet-connected devices.
                       </p>
                       <p>
                       You can watch as much as you want, whenever you want, without a single ad – all for one <br/>
                       low monthly price. There's always something new to discover, and new TV shows and <br/>
                        movies are added every week!
                       </p>
                </div>
            </li>
            <li>
                <input type='radio' name='accordion' id='fourth'></input>
                <label for="fourth">How do i cancel?</label>
                <div className='question-content'>
                       <p>
                       Netflix is a streaming service that offers a wide variety of award-winning TV shows, <br/>
                        movies, anime, documentaries and more – on thousands of internet-connected devices.
                       </p>
                       <p>
                       You can watch as much as you want, whenever you want, without a single ad – all for one <br/>
                       low monthly price. There's always something new to discover, and new TV shows and <br/>
                        movies are added every week!
                       </p>
                </div>
            </li>
            <li>
                <input type='radio' name='accordion' id='fifth'></input>
                <label for="fifth">What can i watch on Netflix?</label>
                <div className='question-content'>
                       <p>
                       Netflix is a streaming service that offers a wide variety of award-winning TV shows, <br/>
                        movies, anime, documentaries and more – on thousands of internet-connected devices.
                       </p>
                       <p>
                       You can watch as much as you want, whenever you want, without a single ad – all for one <br/>
                       low monthly price. There's always something new to discover, and new TV shows and <br/>
                        movies are added every week!
                       </p>
                </div>
            </li>
            <li>
                <input type='radio' name='accordion' id='sixth' ></input>
                <label for="sixth">Is Netflix good for kids?</label>
                <div className='question-content'>
                       <p>
                       Netflix is a streaming service that offers a wide variety of award-winning TV shows, <br/>
                        movies, anime, documentaries and more – on thousands of internet-connected devices.
                       </p>
                       <p>
                       You can watch as much as you want, whenever you want, without a single ad – all for one <br/>
                       low monthly price. There's always something new to discover, and new TV shows and <br/>
                        movies are added every week!
                       </p>
                </div>
            </li>
         </ul>
         <h4 >Ready to watch? Enter your email to create or restart your membership.</h4>
        <input type='text' placeholder='Email address'></input>
        <a href='#'>Get Started </a>
    </div>
  )
}

export default Questions