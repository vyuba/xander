// import React from 'react'
import strtSok from "../assets/images/steetsouk logo.png"
import every from "../assets/images/everynoun logo.png"
import j8Agency from "../assets/images/j8Agency logo.png"
import african from "../assets/images/african proverb logo.png"
import kript from "../assets/images/kript logo.png"
import rager from "../assets/images/rager logo.png"
import thirsty from "../assets/images/thirsty logo.png"
import zttw from "../assets/images/zttw logo.png"

function SlideShow() {
  return (
    <div className="SlideShow my-3 overflow-hidden bg-accent py-1">
        <div className="logoContainer animate-slide flex gap-3">
          <img className="brandLogo" src={strtSok} alt="" />
          <img className="brandLogo" src={every} alt="" />
          <img className="brandLogo" src={j8Agency} alt="" />
          <img className="brandLogo" src={african} alt="" />
          <img className="brandLogo" src={kript} alt="" />
          <img className="brandLogo" src={rager} alt="" />
          <img className="brandLogo" src={thirsty} alt="" />
          <img className="brandLogo" src={zttw} alt="" />
        </div>
    </div>
  )
}

export default SlideShow