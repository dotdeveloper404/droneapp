import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-3">
                            <a href="#" className="logo">
                                <Image width={'80'} height={'47'} src={'/assets/images/logo.png'} alt="Drone" />
                            </a>
                        </div>
                        <div className="col-xl-6 col-lg-7 d-none d-lg-block">
                            <nav className="nav-menu">
                                <ul className="nav-menu-items">
                                    <li><a href="#home" className="active">Home</a></li>
                                    <li><a href="#our-works">Our Works</a></li>
                                    <li><a href="#our-gears">Our Gears</a></li>
                                    <li><a href="#reviews">Reviews</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <button type="button" className="menu-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </header>
        </>
    )
}

export default Header