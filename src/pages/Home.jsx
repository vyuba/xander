// import React from 'react'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import SlideShow from "../components/SlideShow"

function Home() {
  return (
    
    <div>
        <Navbar/>
        <div>
        
        </div>
        <h6 className="capitalize font-patino pl-4 text-secondary underline text-xl">brands i have worked with</h6>
        <SlideShow/>
        <p className="font-patino text-secondary pl-4 ">
            Welcome to Xander Portfolio! Capturing moments and telling stories through the lens is not just a profession; it's our passion. With a keen eye for detail and a dedication to creativity, we strive to produce captivating imagery and cinematic experiences that leave a lasting impression. Explore our portfolio to discover the beauty, emotion, and artistry behind our work.
        </p>
        <div>
          <div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h6 className="pl-4 capitalize font-patino text-secondary underline text-xl">explore work</h6>
        <Footer/>
    </div>
  )
}

export default Home