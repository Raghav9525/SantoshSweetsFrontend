
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { foods } from './Constant'
import { FaIndianRupeeSign } from 'react-icons/fa6';


import './style.css';

function Home(props) {
    const navigate = useNavigate();

    // async function orderFood() {
    //     try {
    //         const response = await axios("http://localhost:5000/authentication",{
    //             withCredentials: true // Include cookies in the request

    //         })
    //         if (response.status == 200) {
    //             // make setIsAuthenticated as true
    //             props.setIsAuthenticated(true);
    //             navigate("/order")
    //         }
    //         else {
    //             navigate("/login")
    //         }
    //     } catch (error) {
    //         // Handle any error that occurs during the request
    //         console.error("Error:", error);
    //     }
    // }

    return (
        <>
            <div class="pages-section pt-3">
                <div class="home-page pb-3" id="section1">
                    <div class="container">

                        <div class="row mt-2">
                            <div class="col-md-4 col-12 mb-4">
                                <div class="card">
                                    <img src={require("../html/img/samosa2.jpg")} alt="" style={{ height: "230px" }} />
                                    <div className="card-body">
                                        <h4>Samosa</h4>
                                        <h2 className="text-primary">
                                            <FaIndianRupeeSign className="text-primary" />7
                                        </h2>
                                        <button className="btn btn-primary me-2" >Book Now</button>
                                        {/* <button class="btn btn-primary" >View Details</button> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-12 mb-4">
                                <div class="card">
                                    <img src={require("../images/rasogulla.png")} alt="" style={{ height: "230px" }} />
                                    <div className="card-body">
                                        <h4>Rasogulla</h4>
                                        <h2 className="text-primary">
                                            <FaIndianRupeeSign className="text-primary" />350
                                        </h2>
                                        <button className="btn btn-primary me-2" >Book Now</button>
                                        {/* <button class="btn btn-primary" >View Details</button> */}
                                    </div>                                
                                </div>
                            </div>
                            <div class="col-md-4 col-12">
                                <div class="card">
                                    <img className="mb-2" src={require("../images/litti.png")} alt="" style={{ height: "225px" }} />
                                    <div className="card-body">
                                        <h4>Litti</h4>
                                        <h2 className="text-primary">
                                            <FaIndianRupeeSign className="text-primary" />7
                                        </h2>
                                        <button className="btn btn-primary me-2" >Book Now</button>
                                        {/* <button class="btn btn-primary" >View Details</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>




                        {/* <!--home page main menu list (crousal) --> */}
                        {/* <div class="row mt-2">
                            <div class="col-12 col-md-4">
                                <div class="box-shadow1">
                                    <div class="card">
                                        <img src={require("../images/samosa.png")} class="card-img-top img-fluid" alt="Samosa Image" />
                                        <div class="row mt-3">
                                            <div class="col-sm-6 ">
                                                <h5 class="card-heading ms-4 me-4 ">samosa</h5>
                                            </div>
                                            <div class="col-sm-6">
                                                <h5 class="card-paragraph ">Rs: 7</h5>

                                            </div>
                                        </div>
                                        <button className="btn col-4 btn-primary ms-2">Book Now</button>
                                    </div>
                                </div>
                               
                            </div>

                            <div class="col-12 col-md-4">
                                <div class="box-shadow1">
                                    <div class="card">
                                        <img src={require("../images/rasogulla.png")} class="card-img-top img-fluid" alt="Mithai Image" />
                                        <div class="row mt-3">
                                            <div class="col-sm-6 ">
                                                <h5 class="card-heading ms-4 me-4 ">Mithai</h5>
                                            </div>
                                            <div class="col-sm-6">
                                                <h5 class="card-paragraph ">Rs: 350/kg</h5>

                                            </div>
                                        </div>
                                        <button className="btn col-4 btn-primary ms-2">Book Now</button>

                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-md-4">
                                <div class="box-shadow1">
                                    <div class="card">
                                        <img src={require("../images/litti.png")} class="card-img-top img-fluid" alt="Mithai Image" />
                                        <div class="row mt-3">
                                            <div class="col-sm-6 ">
                                                <h5 class="card-heading  ">Litti</h5>
                                            </div>
                                            <div class="col-sm-6">
                                                <h5 class="card-paragraph ">Rs: 7</h5>

                                            </div>
                                        </div>
                                        <button className="btn col-4 btn-primary ms-2">Book Now</button>

                                    </div>
                                </div>
                            </div>
                        </div> */}



                        {/* home page small menu --> */}
                        <div class="row mt-4">
                            <div class="col-4 col-md-2 col-lg-1">
                                <div class="menu text-center">
                                    <img src={require("../images/1.jpg")} alt="" class="menu-img" />
                                    <p class="item-name">Fast food</p>
                                </div>
                            </div>
                            <div class="col-4 col-md-2 col-lg-1">
                                <div class="menu text-center">
                                    <img src={require("../images/2.jpg")} alt="" class="menu-img" />
                                    <p class="item-name">Fast food</p>
                                </div>
                            </div>
                            <div class="col-4 col-md-2 col-lg-1">
                                <div class="menu text-center">
                                    <img src={require("../images/3.jpg")} alt="" class="menu-img" />
                                    <p class="item-name">Fast food</p>
                                </div>
                            </div>
                            <div class="col-4 col-md-2 col-lg-1">
                                <div class="menu text-center">
                                    <img src={require("../images/4.jpg")} alt="" class="menu-img" />
                                    <p class="item-name">Fast food</p>
                                </div>
                            </div>
                            <div class="col-4 col-md-2 col-lg-1">
                                <div class="menu text-center">
                                    <img src={require("../images/5.jpg")} alt="" class="menu-img" />
                                    <p class="item-name">Fast food</p>
                                </div>
                            </div>
                            <div class="col-4 col-md-2 col-lg-1">
                                <div class="menu text-center ">
                                    <img src={require("../images/6.jpg")} alt="" class="menu-img" />
                                    <p class="item-name">Fast food</p>
                                </div>
                            </div>
                            <div class="col-4 col-md-2 col-lg-1">
                                <div class="menu text-center ">
                                    <img src={require("../images/7.jpg")} alt="" class="menu-img" />
                                    <p class="item-name">Fast food</p>
                                </div>
                            </div>
                            <div class="col-4 col-md-2 col-lg-1">
                                <div class="menu text-center">
                                    <img src={require("../images/8.jpg")} alt="" class="menu-img" />
                                    <p class="item-name">Fast food</p>
                                </div>
                            </div>
                            <div class="col-4 col-md-2 col-lg-1">
                                <div class="menu text-center">
                                    <img src={require("../images/9.jpg")} alt="" class="menu-img" />
                                    <p class="item-name">Fast food</p>
                                </div>
                            </div>
                            <div class="col-4 col-md-2 col-lg-1">
                                <div class="menu text-center">
                                    <img src={require("../images/10.jpg")} alt="" class="menu-img" />
                                    <p class="item-name">Fast food</p>
                                </div>
                            </div>
                            <div class="col-4 col-md-2 col-lg-1">
                                <div class="menu text-center">
                                    <img src={require("../images/11.jpg")} alt="" class="menu-img" />
                                    <p class="item-name">Fast food</p>
                                </div>
                            </div>
                            <div class="col-4 col-md-2 col-lg-1">
                                <div class="menu text-center">
                                    <img src={require("../images/12.jpg")} alt="" class="menu-img" />
                                    <p class="item-name">Fast food</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!-- Order page --> */}
                {/* <div class="order-page pt-5 pb-5" id="section2">
                    <div class="container">
                        <div class="row">

                            <div class="col-12 col-md-5 order-md-0">
                                <div>
                                    <img class="product-img w-100" src="./images/samosa.png" />
                                </div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-12 col-md-5 order-md-1">
                                <div>
                                    <h1 class="order-page-main-heading">Salmon with salad</h1>
                                </div>

                                <div class="empty-div m-2">
                                    <h2 class="card-heading">Samosa</h2>
                                    <h5 class="card-paragraph">Rs:- 7</h5>
                                    <label htmlFor="qty">Quantity</label>
                                    <input type="number" className="qty" name="qty" /><br />
                                    <label htmlFor="pay-method">Payment Method</label><br />
                                    <input type="radio" className="pay-method" name="pay-method" />online
                                    <input type="radio" className="pay-method" name="pay-method" />offline
                                    <br />
                                    <button class="btn btn-primary" >Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* About page */}
                {/* <div class="about-page pb-3" id="section3">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-md-12">
                                <h1 class="about-page-main-heading">About Us</h1>
                                <p class="about-page-paragraph">Most online stores offer lower prices. Online shopping makes price comparison simpler and quicker. It is very convenient to shop from where you are located. It saves you the cost of driving to stores, as well as parking fees.</p>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="shadow p-3 text-center mb-3">
                                    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-services-delivery-img.png" className="service-card-image" alt="Image Description" />
                                    <h1 class="service-card-title">Fast and Free Delivery</h1>
                                    <p class="service-card-description">Fast, free, and convenient delivery choices on millions of items.</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="shadow p-3 text-center mb-3">
                                    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-services-money-back-img.png" class="service-card-image" />
                                    <h1 class="service-card-title">100% Money back guarantee</h1>
                                    <p class="service-card-description">This is probably the most popular guarantee in the world.</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="shadow p-3 text-center mb-3">
                                    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-services-24-by-7-support-img.png" class="service-card-image" />
                                    <h1 class="service-card-title">Online Support 24/7</h1>
                                    <p class="service-card-description">Our Online Support will provide you with many useful functions, valuable information, tips.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </>
    )
}


export default Home