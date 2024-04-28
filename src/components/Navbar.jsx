// import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="w-full py-5 px-4">
     <ul className="flex justify-between pb-2 items-center">
        <li className="hidden text-secondary capitalize font-patino">contact me</li>
        <Link to="/"><h1 className="logo font-planet text-secondary text-xl">xander</h1></Link>
        <li className="hidden text-secondary capitalize font-patino">films</li>
        <li className="text-secondary capitalize font-patino text-lg">menu</li>
     </ul>
     <div className="scrollProgressBar relative w-full h-1 bg-secondary before:block before:h-1 before:w-1/3 before:bg-accent before:absolute top-[1px]"></div>
    </div>
  )
}

export default Navbar