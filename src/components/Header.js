import React from 'react'
import './css/Header.css'
export const Header = () => {
       
        window.addEventListener('scroll',()=>{
          let header = document.querySelector('.navBarSection');
          let logo = document.querySelector('.logoDiv');
          header.classList.toggle('fixed', window.scrollY>400)
          logo.classList.toggle('changeSize', window.scrollY>400)
        })
  return (

    <div className='navBar' >
        <div className='navBarSection ' >
             <div className='logoDiv' >
               <p id='logo_initial'>R</p> <p>aoZaid</p>
                </div>        
        <div className='links' >
        <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#home">About</a></li>
        <li><a href="#home">Resume</a></li>
        <li><a href="#home">Projects</a></li>
        <li><a href="#home">Contact</a></li>
        </ul>
 </div>
        </div>
    </div>

  )
}
