// import React from 'react'

import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Contact() {
  return (
    <div>
        <Navbar/>
        <div className="container-about px-4 text-center leading-relaxed text-secondary">
            <p className="aboutme">
            1percnt is a Video Production company based in Lagos, Nigeria. 
            Our portfolio is made up of Music Videos, Commercials, Media Content, Personal Projects, Events.
            Credits: Wear Thirsty, Thirsty Sonics, Rvger, +234, Dj Cuppy, Straffitti, Krypt, Street Souk, African Proverb, J8 Agency, Everynoun.
            </p>
            <p className="booking-us">
                FOR BOOKINGS AND INQUIRIES, PLEASE CONTACT USING THE FORM BELOW OR EMAIL AT
            </p>
            <p className="email">
                1percentevryday@gmail.com
            </p>
        </div>
        <form className="w-full h-fit py-5 max-w-sm mx-auto bg-primary px-4  font-patino" action="">
            <div className="mb-5 text-secondary">
                <label htmlFor="">Full name</label>
                <input className="h-11 w-full" type="text" />
            </div>
            <div className="mb-5 text-secondary">
                <label htmlFor="">Email address</label>
                <input placeholder="name@email.com" className="h-11 w-full placeholder:pl-2" type="email" />
            </div>
            <div className="mb-5">
                <label className="text-secondary" htmlFor="">Purpose</label>
                <select className="w-full h-11" name="purpose" id="purpose">
                    <option className="text-primary" value="">Select a purpose</option>
                    <option className="text-primary" value="booking">Booking</option>
                    <option className="text-primary" value="collaboration">Collaboration</option>
                    <option className="text-primary" value="other">Other</option>
                </select>
            </div>
            <div className="mb-5 text-secondary">
                <label htmlFor="">Message</label>
                <input className="h-11 w-full" type="text" />
            </div>
            <button type="submit" className="text-secondary border py-3 px-10 mx-[30%]">
                Submit
            </button>
        </form>
        <Footer/>
    </div>
  )
}

export default Contact