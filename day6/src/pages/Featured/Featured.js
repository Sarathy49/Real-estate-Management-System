import React from "react"
import "./Featured.css"
import FeaturedCard from "./FeatureCard"

const Featured = () => {
  return (
    <>
          <div className="t1">
            <h1>
                Featured property type
                find all property
            </h1>
          </div>
      <section className='featured background'>
        <div className='cntainer'>
          
            <FeaturedCard />

          
        </div>
      </section>
    </>
  )
}

export default Featured