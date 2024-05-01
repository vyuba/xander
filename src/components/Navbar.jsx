// import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [menuIsOpen, setmenuIsOpen] = useState(false);
  const toggleMenu = ()=>{
    console.log('clicked')
    setmenuIsOpen(prev => !prev)
  }
  return (
    <div className="w-full py-5 px-4">
          <nav className="flex justify-between z-10 bg-white px- lg:justify-evenly h-fit items-center w-full pt-1 lg:py-10">
          <Link to="/">
            <h1 className="logo font-planet text-secondary text-2xl">xander</h1>
          </Link>
        <ul
          className={`bg-accent lg:bg-white transition-all absolute lg:static top-0 left-0 w-full lg:w-fit z-20 h-screen lg:h-fit flex flex-col items-start py-10 lg:py-0 lg:flex-row capitalize font-patino font-normal text-xl lg:text-base lg:items-center overflow-hidden ${
            !menuIsOpen ? "left-[-100%]" : "left-0"
          }`}
        >
          <Link to="/">
            <h1 className="logo font-planet py-2 px-5 text-secondary text-2xl">xander</h1>
          </Link>
          <div className="list-container py-3">
            <p className="uppercase text-primary font-bold text-base px-4">topic</p>
            <Link to="/Contact">
            <li className="w-full lg:w-fit py-2 px-5 hover:bg-blue-700 lg:px-3 xl:px-4 text-secondary text-xl  lg:text-black no-underline bg-transparent">contact</li>
            </Link>
            <Link to="/Films">
            <li className="w-full lg:w-fit py-2 px-5 hover:bg-blue-700 lg:px-3 xl:px-4 text-secondary text-xl lg:text-black no-underline bg-transparent">
              films
            </li>
            </Link>
          </div>
          <div className="list-container py-3">
            <p className="uppercase text-primary font-bold text-base px-4">links</p>
            <Link to="/Contact">
            <li className="w-full lg:w-fit py-2 px-5 hover:bg-blue-700 lg:px-3 xl:px-4 text-secondary  lg:text-black no-underline bg-transparent">youtube</li>
            </Link>
            <Link to="/Films">
            <li className="w-full lg:w-fit py-2 px-5 hover:bg-blue-700 lg:px-3 xl:px-4 text-secondary lg:text-black no-underline bg-transparent">
              1%everyday shop
            </li>
            </Link>
          </div>
        </ul>
        <div className="background z-[100]" onClick={toggleMenu}>
          <button className="menu__icon">
            <span className={`w-full h-[2px] rounded-2xl border-black bg-black block transition-all ${
              !menuIsOpen
                ? ""
                : "menu_span1"
            }`}></span>
            <span className={`w-full h-[2px] rounded-2xl border-black bg-black block transition-all ${
              !menuIsOpen
                ? ""
                : "menu_span2"
            }`}></span>
            <span className={`w-full h-[2px] rounded-2xl border-black bg-black block transition-all ${
              !menuIsOpen
                ? ""
                : "menu_span3"
            }`}></span>
          </button>
        </div>
    </nav>
      {/* <ul className="flex justify-between pb-2 items-center">
        <li className=" text-secondary capitalize font-patino">
          contact me
        </li>
        <Link to="/">
          <h1 className="logo font-planet text-secondary text-xl">xander</h1>
        </Link>
        <li className="text-secondary capitalize font-patino">films</li>
        <div className="background" onClick={toggleMenu}>
          <button className="menu__icon">
            <span className={`w-full h-[2px] rounded-2xl border-black bg-black block transition-all ${
              !menuIsOpen
                ? ""
                : "menu_span1"
            }`}></span>
            <span className={`w-full h-[2px] rounded-2xl border-black bg-black block transition-all ${
              !menuIsOpen
                ? ""
                : "menu_span2"
            }`}></span>
            <span className={`w-full h-[2px] rounded-2xl border-black bg-black block transition-all ${
              !menuIsOpen
                ? ""
                : "menu_span3"
            }`}></span>
          </button>
        </div>
      </ul> */}
      <div className="scrollProgressBar relative w-full h-1 bg-secondary before:block before:h-1 before:w-1/3 before:bg-accent before:absolute top-[1px]"></div>
    </div>
  );
}

export default Navbar;
