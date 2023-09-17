import React from 'react'

const Footer = () => {
    return (
        <>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ft-left-area">
                            <div className="ft-content1">
                                <h2>Ready to Get Started?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <a href="#" className="btn-s3">Get in Touch</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ft-right-area">
                            <div className="ft-content2">
                                <h3>Have any Question? Go to our Faqs</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="ft-rarea-bottom">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="ft-contact-info">
                                            <div className="ft-ci-item">
                                                <h4>Email</h4>
                                                <a href="mailto:info@domain.com">info@domain.com</a>
                                            </div>
                                            <div className="ft-ci-item">
                                                <h4>Phone</h4>
                                                <a href="tel:+6289897878">(+62) 8989 7878</a>
                                            </div>
                                            <div className="ft-ci-item">
                                                <h4>Address</h4>
                                                <p>Raya Yogyakarta Street <br/> 2408, Indonesia</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="ft-social-link">
                                            <ul>
                                                <li><a href="#">Facebook</a></li>
                                                <li><a href="#">Twitter</a></li>
                                                <li><a href="#">LinkedIn</a></li>
                                                <li><a href="#">Instagram</a></li>
                                                <li><a href="#">Youtube</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
       <button id="scrollTop"><i className="las la-angle-double-up"></i></button>
       </> 
    )
}

export default Footer