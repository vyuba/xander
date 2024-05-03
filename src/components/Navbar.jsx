import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [menuIsOpen, setmenuIsOpen] = useState(false);
  const toggleMenu = ()=>{
    console.log('clicked')
    setmenuIsOpen(prev => !prev)
  }
  return (
    <div className="w-full py-5 px-4 md:p-0 md:w-fit">
          <nav className="flex justify-between z-10 bg-white lg:justify-evenly h-fit items-center w-full pt-1 lg:py-10">
          <Link to="/">
            <h1 className="logo md:hidden font-planet text-secondary text-2xl">xander</h1>
          </Link>
        <ul
          className={`border-2 md:flex w-full flex-col justify-between md:justify-start fixed top-0 md:left-0 transition-all  z-50 md:z-0  md:w-64 h-screen bg-primary border-accent ${!menuIsOpen ? 'left-[-100%]' : 'left-0'}`}
        >
          <Link to="/">
            <h1 className="logo font-planet py-2 pt-8 px-5 text-accent text-2xl md:text-3xl ">xander</h1>
          </Link>
          <div className="list-container py-3">
            <p className="uppercase text-accent font-bold text-base px-4">topic</p>
            <Link to="/Contact">
            <li className="w-full lg:w-fit py-2 px-5 hover:bg-blue-700 lg:px-3 xl:px-4 text-secondary text-xl  lg:text-black no-underline bg-transparent font-patino capitalize">contact</li>
            </Link>
            <Link to="/Films">
            <li className="w-full lg:w-fit py-2 px-5 hover:bg-blue-700 lg:px-3 xl:px-4 text-secondary text-xl font-patino capitalize lg:text-black no-underline  bg-transparent">
              films
            </li>
            </Link>
          </div>
          <div className="list-container py-3">
            <p className="uppercase text-accent font-bold text-base px-4">links</p>
            <Link to="/Contact">
            <li className="w-full lg:w-fit py-2 px-5 hover:bg-blue-700 lg:px-3 xl:px-4 text-secondary  lg:text-black no-underline bg-transparent font-patino capitalize  text-xl"> <a href="https://youtube.com/@xander.thegr8?si=GizhtR5ha-3f8Wuc">youtube</a></li>
            </Link>
            <Link to="/Films">
            <li className="w-full lg:w-fit py-2 px-5 hover:bg-blue-700 lg:px-3 xl:px-4 text-secondary lg:text-black no-underline bg-transparent font-patino capitalize  text-xl"><a href="https://open.spotify.com/show/7uPnmTg0EQRSpd6ANJuXFv?si=4f6409aa16514f53">podcast</a>
            </li>
            </Link>
            <Link to="/Films">
            <li className="w-full lg:w-fit py-2 px-5 hover:bg-blue-700 lg:px-3 xl:px-4 text-secondary lg:text-black no-underline bg-transparent font-patino capitalize  text-xl">
              1%everyday shop
            </li>
            </Link>
          </div>
          <div className="list-container py-3">
            <p className="uppercase text-accent font-bold text-base px-4">links</p>
            <Link to="/Contact">
            <li className="w-full lg:w-fit py-2 px-5 hover:bg-blue-700 lg:px-3 xl:px-4 text-secondary  lg:text-black no-underline bg-transparent font-patino capitalize text-xl">youtube</li>
            </Link>
            <Link to="/Films">
            <li className="w-full lg:w-fit py-2 px-5 hover:bg-blue-700 lg:px-3 xl:px-4 text-secondary lg:text-black no-underline bg-transparent font-patino capitalize text-xl">
              1%everyday shop
            </li>
            </Link>
          </div>
          <div className="icons flex gap-3 items-center justify-start px-4">
          <a href="https://l.instagram.com/?u=https%3A%2F%2Fvimeo.com%2Fuser209008320&e=AT3x9_hl3PdULbNjV7e8XLYXXYySdR8PASyKKBhTnGNhp48MQRoHpj2uUJSzTYrOOZUalufOtHduhTba9xs6bTmcHqH1jWb9nWUub5s">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.3459 4.65406C19.0372 2.82124 15.4614 5.64316 14.5961 7.12694C15.8974 7.43176 18.5 7.54313 16 12.0276C15 13.6885 12.7 15.8145 11.5 11.0311C10 5.05175 10 0.567258 2 7.54313C2.47556 8.4911 3.76645 8.5883 4.74116 8.17029C5.62781 7.79005 6.54267 7.94136 7 9.53652C8 13.0245 8.5 19.9866 12 19.9866C15.6345 20.4812 24.461 7.12711 21.3459 4.65406Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="https://wa.me/+2349031471203">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </a>
          <a href="https://www.instagram.com/1.percnt?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M17.5078 6.5H17.4988"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        </ul>
        <div className="background fixed bg-primary right-5 top-4 z-[100] md:hidden" onClick={toggleMenu}>
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
      <div className="scrollProgressBar relative w-full h-1 bg-secondary before:block before:h-1 before:w-1/3 before:bg-accent before:absolute top-[1px] md:hidden"></div>
    </div>
  );
}

export default Navbar;
