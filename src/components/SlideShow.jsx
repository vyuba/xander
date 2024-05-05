// import React from 'react'
import thirsty from "/images/logo.webp"
// import every from "../assets/images/everynoun logo.png"
// import j8Agency from "../assets/images/j8Agency logo.png"
import african from "/images/fullsizeoutput_46f.webp"
// import kript from "../assets/images/kript logo.png"
import rager from "/images/4_1_baceae0b-8ee1-4a3a-9ef3-130a223e8dfa_100x.avif"
import strtSok from "/images/652ebc4b01944cd609be6963_webclip.png"
// import zttw from "../assets/images/zttw logo.png"

function SlideShow() {

  return (
    <div>
<div className="stock-ticker">
  <ul>
    <li className="minus">
      <img className="h-[4rem]" src={strtSok} alt="" />
      {/* <span className="company">AAPL</span>
      <span className="price">181.16</span>
      <span className="change">-1.36 (-0.75%)</span> */}
    </li>
    <li className="plus">
      <img className="h-6" src={thirsty} alt="" />
    </li>
    <li className="plus">
      <img className="h-[2rem]" src={african} alt="" />
    </li>
    <li className="minus">
      <img className="h-5" src={rager} alt="" />
    </li>
    <li className="plus">
      <img className="h-[4rem]" src={strtSok} alt="" />
    </li>
    <li className="minus">
    <img className="h-6" src={thirsty} alt="" />
    </li>
    <li className="plus">
    <img className="h-[4rem]" src={strtSok} alt="" />
    </li>
    <li className="minus">
      <img className="h-6" src={thirsty} alt="" />
    </li>
  </ul>

  <ul aria-hidden="true">
    <li className="minus">
      <img className="h-[4rem]" src={strtSok} alt="" />
    </li>
    <li className="plus">
    <img className="h-6" src={thirsty} alt="" />
    </li>
    <li className="plus">
    <img className="h-[2rem]" src={african} alt="" />
    </li>
    <li className="minus">
    <img className="h-5" src={rager} alt="" />
    </li>
    <li className="plus">
    <img className="h-[4rem]" src={strtSok} alt="" />
    </li>
    <li className="minus">
      <img className="h-6" src={thirsty} alt="" />
    </li>
    <li className="plus">
      <img className="h-[4rem]" src={strtSok} alt="" />
    </li>
    <li className="minus"><img className="h-6" src={thirsty} alt="" />
    </li>
  </ul>
</div>
    </div>

  )
}

export default SlideShow