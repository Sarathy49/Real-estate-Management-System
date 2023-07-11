import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return(
     <div className='navbar'>
      <h3 className='logo'>logo</h3> 
      
        
        
         <div className='nav'>
          <Link to="/" className='home'>
            <h1>Home</h1>
          </Link>
          <Link to="/about" className='about'>
            <h1>About</h1>
          </Link>
          <Link to="/contact" className='contact'>
            <h1>Contact</h1>
          </Link>
          <Link to="/property" className='property'>
            <h1>property</h1>
          </Link>
          <Link to="/signin" className='signin'>
            <h1>signin</h1>
          </Link>
        </div>
        
      
     </div>
  )
}
export default Navbar;