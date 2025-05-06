import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
        
        <div className='hero-content'>
            <h2> Building Digital Experiences that Ignite Inspiration </h2>
            <p>
                Enthusiastic Front-End Developer | Crafting Seamless and Visually Striking Web Solutions from Concept to Reality
            </p>
        </div>

        <div className='hero-img'>
            <div className='dazai'>
                <div className='tech-icon'>
                    <img src='./assets/react.png'/>
                </div>
                <img id='dazai' src='./assets/dazai.jpg' alt=''/>
            </div>
            
            <div>
                <div className='tech-icon'>
                    <img src='./assets/HTML.png' alt=''/>
                </div>
            
                <div className='tech-icon'>
                    <img src='./assets/CSS.jpg' alt=''/>
                </div>
                
                <div className='tech-icon'>
                    <img src='./assets/JavaScript.png' alt=''/>
                </div>
            </div>
                

        </div>
    </section>
  )
}

export default Hero