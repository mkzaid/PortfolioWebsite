import React from 'react'
import './about.css'
import ExamplePdf from '../Example.pdf'
const About = () => {
  return (
    <div className="aboutContainer">
            <div className="imgContainer">
                           <div className="imgDiv">
                       {/* <img src={pic} alt="wrg" /> */}
                           </div>
            </div>
             <div className="aboutSection">
              <div className="aboutDiv hidden ">
                      <h1>About Me</h1>
                      <p>Web programming is my passion. I have been in this field since 2018 . I love Programing and can solve problems. I can build web pages that can help your buisness grow.</p>
                      <div className="info">
                        <div className="q">

                        <p>Name:</p>
                        <p>Date of birth:</p> 
                        <p>Address:</p>
                        <p>Email:</p>
                        <p>Phone:</p> 
                        </div>
                        <div className="ans">

                         <span>Rao Zaid Umar</span> 
                        <span>11 September 2001</span> 
                         <span>Okara , Punjab ,Pakistan</span> 
                         <span>zaidtheprogrammer@gmail.com</span> 
                        <span>+92 340 1121709</span>
                        </div>
                      </div>

              </div>
              <a
        href={ExamplePdf}
        download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"
      >
              <button className="cv">
                Download CV
              </button>
              </a>
             </div>
    </div>
  )
}

export default About