import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
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
            <div className="Home-Body">

                <NavBar />

                <main className="Home-Main">
                    {/* ----------------------Bootstrap carousel--------------------- */}
                    <div id="carouselSlides" className="carousel slide myCarousel" data-ride="carousel" data-interval="3000" data-wrap="true" >
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
                                <p className="aboutPar">
                                    Monday-Friday:<br />
                                    7:00am-6:00pm
                            </p>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 about-column center-column">
                                <img className="ages" src={Ages} alt="Ages" />
                                <h4>Age Care Range</h4><br />
                                <p className="aboutPar">
                                    We care for children from<br />
                                    12 weeks to 9 years old.
                            </p>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 about-column">
                                <img className="sandwich" src={Sandwich} alt="Sandwich" />
                                <h4>Meals We Provide</h4><br />
                                <p className="aboutPar">
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
                                    makes for a quick commute to work. We would love to give you a tour of our center.
                            </p>
                            </div>
                        </div>
                    </div>
                    {/* ------------end of director section-------------- */}


                    {/* ------------testimonial section------------ */}
                    <div className="container test-container">
                        <div className="row">

                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <h2 className="testimonial-title">What Are Small Fri Parents Saying About Us?</h2>
                            </div>

                            {/* Bootstrap carousel */}
                            <div id="carouselSlides2" className="carousel slide myCarousel2" data-ride="carousel" data-interval="3000" data-wrap="true" >
                                {/* Carousel indicators */}
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselSlides2" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselSlides2" data-slide-to="1"></li>
                                    <li data-target="#carouselSlides2" data-slide-to="2"></li>
                                    <li data-target="#carouselSlides2" data-slide-to="3"></li>
                                </ol>
                                {/* End of carousel indicators */}
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <p className="d-block w-100">
                                            <span className="quoteLeft">“</span>Small Fri Academy has been the best choice we have made for our
                                                son. He loves being there, the teachers and directors are amazing and very helpful. I love when
                                                I pick him up and see all the 2 year olds sitting at the table like such big kids doing their
                                                activities! He has learned so much already from being there and he surprises me with new skills
                                        every day!<span className="quoteRight">”</span><br /><br />
                                            - Kathryn H.
                                    </p>
                                    </div>
                                    <div className="carousel-item">
                                        <p className="d-block w-100">
                                            <span className="quoteLeft">“</span>My wife and I have 5 children, all of which have attended
                                            Small Fri Academy. They all started as infants in the Wiggle Frogs room, and stayed until 1st
                                            grade in the Bouncy Tigers room. Our youngest still attends Small Fri Academy, and we have been
                                            nothing but satisfied! The teachers are well trained, kind, and professional, they always
                                            accommodate to the hours we need, they follow a great curriculum, and they provide a healthy
                                            breakfast, lunch, and snack each day! Our kids never wanted to leave their friends and teachers
                                            at the end of the day! It is wonderful to find a daycare you can trust, and love coming to each
                                        day!<span className="quoteRight">”</span><br /><br />
                                            - Jax and Shannon S.
                                    </p>
                                    </div>
                                    <div className="carousel-item">
                                        <p className="d-block w-100">
                                            <span className="quoteLeft">“</span>I am a new mother, and started my 8 month old son at Small Fri
                                            Academy 4 months ago. I was terrified to leave my baby at a child care facility, and looked at 9
                                            facilities near my home and work before finding Small Fri. I knew as soon as I met his teacher,
                                            this was the best fit for us! His teacher is so kind, listens and fulfills every request and need
                                            I have for my baby, communicates with me throughout the day, and will update me with pictures,
                                            she also sends home a paper stating everything his did throughout the day (eating, sleeping,
                                            diaper changes, mood) so that I know how everything went with my baby boys day! I feel so happy
                                            and comfortable leaving my baby here each day, I couldn’t ask for a better
                                        daycare!<span className="quoteRight">”</span><br /><br />
                                            - Leslie K.
                                    </p>
                                    </div>
                                    <div className="carousel-item">
                                        <p className="d-block w-100">
                                            <span className="quoteLeft">“</span>We love Small Fri Academy! We are so happy we found a
                                            daycare/preschool where we feel comfortable leaving our daughter,  she is happy and well taken
                                        care of every single day. Her speech improved and she gets excited to go every morning.<br /><br />
                                            The staff are very nice and loving. They also help potty train our daughter and that's amazing.<br /><br />
                                            A million times thanks to you all!<span className="quoteRight">”</span><br /><br />
                                            - Amonrat H.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End of Bootstrap carousel */}

                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 testimonial-column">
                                <Link to="/Testimonials"><button className="testimonial-button">Read More &#187;</button></Link>
                            </div>
                        </div>
                    </div>
                    {/* -----------end of testimonial section---------- */}

                    <div className="divider">
                    </div>

                    {/* --------------contact section-------------- */}
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                hello
                            </div>
                        </div>
                    </div>
                    {/* ----------end of contact section---------- */}
                </main>

            </div>
        )
    }
}
export default Home;