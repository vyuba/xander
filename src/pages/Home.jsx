// import React from 'react'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import SlideShow from "../components/SlideShow"
// import video1 from "../assets/images/IMG_7509.mp4"

function Home() {
  return (
    
    <div>
        <Navbar/>
        <div className="relative  my-8"> 
          <div className="imageCenter bg-secondary w-[122px] h-[155px] absolute left-[50%] top-[50%]">
          </div>
          <div className="w-full h-[396px] grid grid-cols-2 place-items-center">
            <div className="snapImage-item object-cover z-10 bg-accent w-[122px] h-[155px]">
            </div>  
            <div className="snapImage-item bg-accent w-[122px] h-[155px]"></div>  
            <div className="snapImage-item bg-accent w-[122px] h-[155px]"></div>  
            <div className="snapImage-item bg-accent w-[122px] h-[155px]"></div>  
        </div>
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
        <div className="slider-wrapper overflow-hidden h-[250px] w-full px-4 pt-4">
          <div className="image-list grid place-items-center h-[250px]  w-full gap-1">
            <div className="image-item object-cover z-10 bg-accent w-[122px] h-[155px]">
            </div>  
            
            <div className="image-item bg-accent w-[122px] h-[155px]"></div>  
            <div className="image-item bg-accent w-[122px] h-[155px]"></div>  
            <div className="image-item bg-accent w-[122px] h-[155px]"></div>  
            <div className="image-item bg-accent w-[122px] h-[155px]"></div>  
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home