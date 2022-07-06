import React, { useState, useEffect } from "react"
// importing navbar styles
import "./Navbar1.css"
import pageLinks from "../constants/links"
// Link from gatsby
import { Link } from "gatsby"

const Navbar = () => {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false)
  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={navbarLogo} alt="logo" />
          </Link>
          <button type="button" className="toggle-btn">
            <FaAlignRight />
          </button>
        </div>
        <div className="nav-links">
          {pageLinks.map(links => {
            return (
              <Link key={links.id} to={links.url}>
                {links.text}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
