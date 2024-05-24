import React  from 'react'
import { Header } from '../components/Header'
import './css/home.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'


const Home = () => {
  const [text] = useTypewriter({
    words: ['React JS Developer','Programer'],
    loop: {},
  })
  return (
    <>
      <div className='home' >
        <Header />
        <div className="overlay">
    </div>
        <div className="centerText slide ">
          <p id='home_t1' >HEY ! I AM </p>
          <h1>Rao ZaidUmar</h1>
        </div>

        <div className='animatedText slide'>
          <h1 className='firstText'>I'm a
            <span className='secText'>
              {text}
            </span>
            <span style={{color:'grey'}}>
              <Cursor/>
              </span>
          </h1>
           

        </div>
        
        <div className="Home_btn slide">
          <button>
            <svg id='svg_arrow' xmlns="http://www.w3.org/2000/svg" fill='#3e64ff'  height="1.5rem" viewBox="0 0 384 512"><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" /></svg>
          </button>
        </div>
        

      </div>
    </>
  )
}

export default Home