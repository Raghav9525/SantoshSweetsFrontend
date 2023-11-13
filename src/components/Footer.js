
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <>
            <div class="footer-section">
            <hr className="divider"/>

                <div class="container">
                    <div class="row pt-5">
                        <div class="col-12 col-md-6 col-lg-4 text-center">
                            <div>
                                {/* <img className="footer-img" src="images/logo.png" /> */}
                                <div className="group mt-3">
                                    <div className="social-media-icon text-center me-2">
                                        <FontAwesomeIcon icon={faGoogle} />
                                    </div>
                                    <div className="social-media-icon text-center me-2">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </div>
                                    <div className="social-media-icon text-center me-2">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </div>
                                    <div className="social-media-icon text-center">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </div>
                                </div>
                            </div>
                            <p class="location-datail mb-4 mt-4">Darbhanga Bihar,India</p>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 justify-content-center">
                            <h1 class="heading">Get to know us</h1>
                            <p class="details">About us</p>
                            <p class="details">Career</p>
                            <p class="details">Press Peleases</p>
                            <p class="details">Gift a smile</p>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                        <h1 class="heading">Contact Us</h1>
                                <p><i class="fas fa-phone me-3"></i>7542061065,6201852087</p>
                                <p style={{whiteSpace: "nowrap"}}>
                                    Gmail: kshubham9525@gmail.com
                                </p>
                                <p style={{whiteSpace: "nowrap"}}>
                                    GitHub: https://github.com/Raghav9525/
                                </p>
                                <p >
                                    Linkdin: https://www.linkedin.com/in/shubham-chaudhary-82b440242 
                                </p>    
                        </div>
                        {/* <div class="col-6 col-md-6 col-lg-3">
                            <h1 class="heading">Let US Help You</h1>
                            <p class="details">100% Purchase Protection</p>
                            <p class="details">Your Account</p>
                            <p class="details">Return Centre</p>
                            <p class="details">Help</p>
                        </div> */}
                    </div>
                    <hr />
                    <div class="copy-right-section pb-4 text-center">
                        <p><span class="contact-icon"><i class="fa-sharp fa-regular fa-copyright"></i></span>Created by GrabWebsite.in 7542061065</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer