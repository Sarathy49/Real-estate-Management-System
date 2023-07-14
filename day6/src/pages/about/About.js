import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"
import Navbar from "../navbar"

const About = () => {
  return (
    <>
    <div>
      <Navbar/>
    </div>
      <section className='about'>
        <div className="us">
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        </div>
        
        <div className='container '>
          <div className='le'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />
            

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='ri'>
            <img src='./immio.jpg' alt='' height={30} />
          </div>
        </div>
      </section>
    </>
  )
}

export default About