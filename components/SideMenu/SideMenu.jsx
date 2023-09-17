import React from 'react'

const SideMenu = () => {
  return (
  
      <div className="sidemenu">
        <div className="sidemenu-overlay"></div>
        <div className="sidemenu-inner">
          <button className="sidemenu-close"><i className="bi bi-x-lg"></i></button>
          <nav className="sidemenu-nav">
            <ul className="sidemenu-nav-items">
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#our-works">Our Works</a></li>
              <li><a href="#our-gears">Our Gears</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>
          <div className="sidemenu-bottom">
            <ul className="sidemenu-social-links">
              <li><a href="#"><i className="lab la-facebook-f"></i></a></li>
              <li><a href="#"><i className="lab la-twitter"></i></a></li>
              <li><a href="#"><i className="lab la-linkedin-in"></i></a></li>
              <li><a href="#"><i className="lab la-instagram"></i></a></li>
              <li><a  href="#"><i className="lab la-youtube"></i></a></li>
            </ul>
            <p>&copy; 2023 Drone. All Rights Reserved</p>
          </div>
        </div>
      </div>
  )
}

export default SideMenu