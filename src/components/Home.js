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
                            <h4>Hours of Operation</h4><br/>
                            <p>
                                Monday-Friday:<br/>
                                7:00am-6:00pm
                            </p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 about-column center-column">
                            <img className="ages" src={Ages} alt="Ages" />
                            <h4>Age Care Range</h4><br/>
                            <p>
                                We care for children from<br/>
                                6 weeks to 6 years old.
                            </p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 about-column">
                            <img className="sandwich" src={Sandwich} alt="Sandwich" />
                            <h4>Meals We Provide</h4><br/>
                            <p>
                                We provide breakfast, lunch, and<br/>
                                snacks through-out the day.
                            </p>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 about-column">
                            <Link to="/About"><button className="about-button">More Info &#187;</button></Link>
                        </div>
                    </div>
                </div>
                {/* --------------End of about us section-------------- */}

                <Footer />

            </div>
        )
    }
}
export default Home;