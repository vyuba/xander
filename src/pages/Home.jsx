import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SlideShow from "../components/SlideShow";
import video1 from "../assets/images/IMG_7509.MP4";
import video2 from "../assets/images/IMG_7510.MP4";
import poster1 from "../assets/images/vlcsnap-2024-05-02-11h09m07s827.png";
import poster2 from "../assets/images/vlcsnap-2024-05-02-11h10m28s442.png";
import poster3 from "../assets/images/vlcsnap-2024-05-02-11h11m29s671.png";
// import video3 from "../assets/images/IMG_7508.MP4"
import gridImg1 from "../assets/images/IMG_7483.JPG";
import gridImg2 from "../assets/images/IMG_7475.JPG";
import gridImg3 from "../assets/images/IMG_7487.JPG";
import gridImg4 from "../assets/images/IMG_7494.JPG";
import Loader from "./LoaderPage";
import VideoCard from "../components/VideoCard";
import { videoData } from "../data/data"

function Home() {
  const [loading, setLoading] = useState(true);
  const videocard = videoData.map((data)=>{
    return(
      <VideoCard
        key ={data.id}
        video={data.video}
        image={data.image}
        Artist={data.artist}
        musicName={data.musicName}   
      />
    )
  })
  useEffect(() => {
    // Simulate loading time (you can replace this with actual data fetching)
    const timeout = () =>{
      setTimeout(() => {
        setLoading(false);
      }, 8000);
    } 

    // Clean up the timeout when the component unmounts
    timeout()
  }, []);

  return loading ? (<Loader/>) : (
    <div className="flex md:flex-row flex-col justify-between">
    <Navbar />
    <div className="w-full md:pl-[255px]">
    {/* <h1 className="font-planet text-secondary py-7 uppercase text-6xl text-center">welcome</h1> */}
    <div className="relative snapImage-container">
      {/* <div className="imageCenter bg-secondary w-[122px] h-[155px] absolute left-[50%] top-[50%]"></div> */}
      <div className="w-full h-[650px] grid gap-5 grid-cols-2 place-items-center">
        <div className="snapImage-item object-cover z-10 bg-accent rounded">
          <img className="object-cover w-full h-full" src={gridImg1} alt="" />
        </div>
        <div className="snapImage-item bg-accent rounded">
          <img className="object-cover w-full h-full" src={gridImg2} alt="" />
        </div>
        <div className="snapImage-item bg-accent rounded">
          <img className="object-cover w-full h-full" src={gridImg3} alt="" />
        </div>
        <div className="snapImage-item bg-accent rounded">
          <img className="object-cover w-full h-full" src={gridImg4} alt="" />
        </div>
      </div>
    </div>
    <p className="font-patino text-secondary pl-4 ">
      Welcome to Xander Portfolio! Capturing moments and telling stories
      through the lens is not just a profession; its our passion. With a keen
      eye for detail and a dedication to creativity, we strive to produce
      captivating imagery and cinematic experiences that leave a lasting
      impression. Explore our portfolio to discover the beauty, emotion, and
      artistry behind our work.
    </p>

    <h6 className="capitalize font-patino pt-6 pl-4 text-secondary underline text-xl">
      brands i have worked with
    </h6>
    <SlideShow />

    <div className="px-4 pb-11 pt-10 flex flex-col gap-2 overflow-hidden">
      <p className="text-lg uppercase text-secondary">best of xander</p>
      <div className="flex w-full flex-row gap-6 pb-5 overflow-x-auto">
        {/* <div className="border-2 border-secondary flex gap-2 flex-col ">
          <div className="w-[270px] h-[300px] border-b-2 border-secondary">
          <video
            className="object-cover w-full h-full"
            loop
            muted
            playsInline
            poster={poster1}
          >
            <source src={video2} type="video/MP4" />
          </video>
          </div>
          <div className="pl-2 py-2">
          <p className="text-xl capitalize text-secondary">Kontroller</p>
          <p className="text capitalize text-secondary">best of xander</p>
          </div>
        </div> */}
        {videocard}
      </div>
    </div>
    <h6 className="pl-4 capitalize font-patino text-secondary underline text-xl">
      explore work
    </h6>
    <div className="slider-wrapper overflow-hidden h-[450px] w-full px-4 pt-4">
      <div className="image-list grid place-items-center h-[350px]  w-full gap-1">
        <div className="image-item z-10 flex justify-center items-center bg-accent w-[200px] h-[300px] rounded border-4 border-secondary" onMouseEnter={(e)=> e.target.play()} onMouseLeave={(e)=> e.target.pause()}>
          <video
          // ref={videoRef}
            className="object-cover w-full h-full"
            loop
            muted
            playsInline
            poster={poster1}
          >
            <source src={video1} type="video/MP4" />
          </video>
        </div>
        <div className="image-item z-10 flex justify-center items-center bg-accent w-[200px] h-[300px] rounded border-4 border-secondary" onMouseEnter={(e)=> e.target.play()} onMouseLeave={(e)=> e.target.pause()}>
          <video
            className="object-cover w-full h-full"
            loop
            muted
            playsInline
            poster={poster2}
          >
            <source src={video2} type="video/MP4" />
          </video>
        </div>
        {/* <div className="image-item z-10 flex justify-center items-center bg-accent w-[170px] h-[250px] rounded">
            <video className="object-cover w-full h-full" loop muted playsInline>
              <source src={video3} type="video/MP4" />
            </video>
          </div>   */}
        <div className="image-item z-10 flex justify-center items-center bg-accent w-[200px] h-[300px] rounded border-4 border-secondary" onMouseEnter={(e)=> e.target.play()} onMouseLeave={(e)=> e.target.pause()}>
          <video
            className="object-cover w-full h-full"
            loop
            muted
            playsInline
            poster={poster3}
          >
            <source src={video1} type="video/MP4" />
          </video>
        </div>
      </div>
    </div>
    <Footer />
    </div>
   
  </div>);

}

export default Home;
