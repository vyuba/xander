import React, { useRef, useState } from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SlideShow from "../components/SlideShow";
import video1 from "../assets/images/IMG_7509.MP4";
import video2 from "../assets/images/IMG_7510.MP4";
// import video3 from "../assets/images/IMG_7508.MP4"
import gridImg1 from "../assets/images/IMG_7483.JPG";

function Home() {
  const [isPlaying,setIsPlaying] = useState(false);
  const videoRef = useRef(null)
  return (
    <div>
      <Navbar />
      <div className="relative  my-8">
        <div className="imageCenter bg-secondary w-[122px] h-[155px] absolute left-[50%] top-[50%]"></div>
        <div className="w-full h-[396px] grid gap-5 grid-cols-2 place-items-center">
          <div className="snapImage-item object-cover z-10 bg-accent w-[155px] h-[200px] rounded"></div>
          <div className="snapImage-item bg-accent w-[155px] h-[200px] rounded"></div>
          <div className="snapImage-item bg-accent w-[155px] h-[200px] rounded"></div>
          <div className="snapImage-item bg-accent w-[155px] h-[200px] rounded"></div>
        </div>
      </div>

      <h6 className="capitalize font-patino pl-4 text-secondary underline text-xl">
        brands i have worked with
      </h6>
      <SlideShow />
      <p className="font-patino text-secondary pl-4 ">
        Welcome to Xander Portfolio! Capturing moments and telling stories
        through the lens is not just a profession; it's our passion. With a keen
        eye for detail and a dedication to creativity, we strive to produce
        captivating imagery and cinematic experiences that leave a lasting
        impression. Explore our portfolio to discover the beauty, emotion, and
        artistry behind our work.
      </p>
      <div className="w-[329px] px-4 py-10 gap-2 flex flex-col ">
        <div className="flex w-full gap-2">
          <img className="w-40" src={gridImg1} alt="" />
          <img className="w-40" src={gridImg1} alt="" />
        </div>
        <div className="flex items-center w-full gap-2">
          <img className="w-40" src={gridImg1} alt="" />
          <img className="w-40" src={gridImg1} alt="" />
        </div>
      </div>
      <h6 className="pl-4 capitalize font-patino text-secondary underline text-xl">
        explore work
      </h6>
      <div className="slider-wrapper overflow-hidden h-[350px] w-full px-4 pt-4">
        <div className="image-list grid place-items-center h-[300px]  w-full gap-1">
          <div className="image-item z-10 flex justify-center items-center bg-accent w-[170px] h-[250px] rounded border-4 border-secondary" onMouseEnter={(e)=> e.target.play()} onMouseLeave={(e)=> e.target.pause()}>
            <video
            // ref={videoRef}
              className="object-cover w-full h-full"
              loop
              muted
              playsInline
            >
              <source src={video1} type="video/MP4" />
            </video>
          </div>
          <div className="image-item z-10 flex justify-center items-center bg-accent w-[170px] h-[250px] rounded border-4 border-secondary" onMouseEnter={(e)=> e.target.play()} onMouseLeave={(e)=> e.target.pause()}>
            <video
              className="object-cover w-full h-full"
              loop
              muted
              playsInline
            >
              <source src={video2} type="video/MP4" />
            </video>
          </div>
          {/* <div className="image-item z-10 flex justify-center items-center bg-accent w-[170px] h-[250px] rounded">
              <video className="object-cover w-full h-full" loop muted playsInline>
                <source src={video3} type="video/MP4" />
              </video>
            </div>   */}
          <div className="image-item z-10 flex justify-center items-center bg-accent w-[170px] h-[250px] rounded border-4 border-secondary" onMouseEnter={(e)=> e.target.play()} onMouseLeave={(e)=> e.target.pause()}>
            <video
              className="object-cover w-full h-full"
              loop
              muted
              playsInline
            >
              <source src={video1} type="video/MP4" />
            </video>
          </div>
        </div>
        <div className="scrollProgressBar relative w-full h-1 bg-secondary before:block before:h-1 before:w-1/3 before:bg-accent before:absolute top-[1px]"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
