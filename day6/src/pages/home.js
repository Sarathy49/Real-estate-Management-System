import React from "react";
import {Link} from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import homepic from "./images/homepng.jpg";
import Featured from "./Featured/Featured";
import Recent from "./recent/Recent";
import Awards from "./awards/Awards";
import Location from "./location/Location";
const Home = () => {
    return(
        <>
        <div className="w">
        <Navbar/>
        </div>
            
        <div className="M1"> 
            <img className="ig1" src={homepic} alt="pic" />
            <div className="heading"><h1>Search Your Next Home</h1></div>
            <div className="heading"><p>Find new & featured property located in your local city.</p></div>
            
        </div>
        <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        
      </div>
    </div>
    
    <div>
        <Hero/>
        <Featured/>
        {/* <Recent/> */}
        <Awards/>
        <Location/>
        
    </div>
  

        </>
    )
}
export default Home;