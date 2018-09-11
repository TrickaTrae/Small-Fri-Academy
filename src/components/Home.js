import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import Footer from './Footer'
import '../Style.css'
import IMG1 from '../Photos&Fonts/IMG1.jpg'
import IMG2 from '../Photos&Fonts/IMG2.jpg'
import IMG3 from '../Photos&Fonts/IMG3.jpg'
import IMG4 from '../Photos&Fonts/IMG4.jpg'
import Clock from '../Photos&Fonts/clock.png'
import Ages from '../Photos&Fonts/Ages.jpg'
import Sandwich from '../Photos&Fonts/sandwich.png'
import Directors from '../Photos&Fonts/Directors.jpg'


class Home extends Component {
    render() {
        return (
            <div>

                <NavBar />

                {/* ----------------------Bootstrap carousel--------------------- */}
                <div id="carouselSlides" className="carousel slide" data-ride="carousel" data-interval="3000" data-wrap="true" >
                    {/* -----Carousel indicators----- */}
                    <ol className="carousel-indicators">
                        <li data-target="#carouselSlides" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselSlides" data-slide-to="1"></li>
                        <li data-target="#carouselSlides" data-slide-to="2"></li>
                        <li data-target="#carouselSlides" data-slide-to="3"></li>
                    </ol>
                    {/* -----End of carousel indicators----- */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={IMG1} alt="Pic1" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={IMG2} alt="Pic2" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={IMG3} alt="Pic3" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={IMG4} alt="Pic4" />
                        </div>
                    </div>
                    {/* ------Buttons for my carousel----- */}
                    <a className="carousel-control-prev" href="#carouselSlides" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselSlides" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    {/* ------End of buttons for my carousel------ */}
                </div>
                {/* ----------------------------End of Bootstrap carousel------------------------------ */}


                {/* -----------------About us section----------------- */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h2 className="about-title">About Us</h2>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 about-column">
                            <img className="clock" src={Clock} alt="Clock" />
                            <h4>Hours of Operation</h4><br />
                            <p>
                                Monday-Friday:<br />
                                7:00am-6:00pm
                            </p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 about-column center-column">
                            <img className="ages" src={Ages} alt="Ages" />
                            <h4>Age Care Range</h4><br />
                            <p>
                                We care for children from<br />
                                12 weeks to 9 years old.
                            </p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 about-column">
                            <img className="sandwich" src={Sandwich} alt="Sandwich" />
                            <h4>Meals We Provide</h4><br />
                            <p>
                                We provide breakfast, lunch, and<br />
                                snacks through-out the day.
                            </p>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 about-column">
                            <Link to="/About"><button className="about-button">More Info &#187;</button></Link>
                        </div>
                    </div>
                </div>
                {/* --------------End of about us section-------------- */}


                {/* ---------------director section----------------- */}
                <div className="container-fluid myParallax">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h2 className="director-title">Message From Management</h2>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <img className="img-fluid director-photo" src={Directors} alt="Directors" />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <p className="director-text">
                                Small Fri Academy has been offering child care for 19 years. Our center Was created to be dedicated to the
                                mental, social, emotional and physical growth of children. The utmost consideration and preparation is taken
                                in planning a daily schedule that meets the needs of your child. Our center has a home like atmosphere and 
                                quality teachers who look forward to spending each day with your child. Our easy access to the I-15 freeway 
                                makes for a quick commute to work. We would love to give you a tour of our center
                            </p>
                        </div>
                    </div>
                </div>
                {/* ------------end of director section-------------- */}


                {/* ------------testimonial section------------ */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h2 className="testimonial-title">What're Small Fri Parents Saying About Us?</h2>
                        </div>
                    </div>
                </div>
                {/* -----------end of testimonial section---------- */}

                <Footer />

            </div>
        )
    }
}
export default Home;