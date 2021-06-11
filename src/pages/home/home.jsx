import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import IMG2 from '../../assetts/IMG2.jpg';
import IMG3 from '../../assetts/IMG3.jpg';
import IMG4 from '../../assetts/IMG4.jpg';
import IMG5 from '../../assetts/IMG5.jpg';
import IMG6 from '../../assetts/IMG6.jpg';
import Clock from '../../assetts/clock.png';
import Ages from '../../assetts/Ages.jpg';
import Sandwich from '../../assetts/sandwich.png';
import Directors from '../../assetts/Directors.jpg';
import Logo from '../../assetts/Small-Fri-Logo-Transparent.png';


// move images to amazon db and pull from there

class Home extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    carousel = () => {
        return (
            <div id="carouselSlides" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselSlides" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselSlides" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselSlides" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselSlides" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselSlides" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="4000">
                        <img className="d-block w-100" src={IMG6} alt="Pic1" />
                    </div>
                     <div className="carousel-item" data-bs-interval="4000">
                        <img className="d-block w-100" src={IMG3} alt="Pic2" />
                    </div>
                     <div className="carousel-item" data-bs-interval="4000">
                        <img className="d-block w-100" src={IMG2} alt="Pic3" />
                    </div>
                     <div className="carousel-item" data-bs-interval="4000">
                        <img className="d-block w-100" src={IMG5} alt="Pic4" />
                    </div>
                     <div className="carousel-item" data-bs-interval="4000">
                        <img className="d-block w-100" src={IMG4} alt="Pic5" />
                     </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselSlides" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselSlides" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }

    about = () => {
        return (
            <div className="container py-3">
                <div className="row py-5">
                    <div className="col-12 text-center">
                        <h1 className="display-2">About Us</h1>
                    </div>
                </div>

                <div className="row py-3">
                    <div className="col-4 text-end">
                        <h2>Hours of Operation</h2>
                        <h4>
                            Monday-Friday:<br/>
                            7:00am-6:00pm
                        </h4>
                    </div>
                    <div className="col-8">
                        <img className="clock" src={Clock} alt="Clock" />
                    </div>
                </div>

                <div className="row py-3">
                    <div className="col-8">
                        <img className="ages" src={Ages} alt="Ages" />
                    </div>
                    <div className="col-4">
                        <h2>Age Care Range</h2>
                        <h4>
                            We care for children from<br/>
                            12 weeks to 9 years old.
                        </h4>
                    </div>
                </div>

                <div className="row py-3">
                    <div className="col-4 text-end">
                        <h2>Meals We Provide</h2>
                        <h4>
                            We provide breakfast, lunch, and<br/>
                            snacks through-out the day.
                        </h4>
                    </div>
                    <div className="col-8">
                        <img className="sandwich" src={Sandwich} alt="Sandwich" />
                    </div>
                </div>

                <div className="row py-5">
                    <div className="col-12 text-center">
                        <Link to="/About">
                            <button className="btn btn-outline-dark btn-lg w-25 py-3">Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <main className="Home-Main">

                    {/* --------------------Home section-------------------- */}
                    <section className="home-section">
                        {/* <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <p className="home-quote">
                                        <span className="quoteLeft">“</span>
                                        Dedicated to the Mental, Social, Emotional, and Physical Growth of Children.
                                <span className="quoteRight">”</span>
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </section>

                    {this.carousel()}

                    {this.about()}

                    {/* ---------------director section----------------- */}
                    <div className="container-fluid director-container">
                        <div className="row director-row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <h2 className="director-title">Message From Management</h2>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <img className="img-fluid director-photo" src={Directors} alt="Directors" />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <p className="director-text">
                                    Small Fri Academy has been offering child care for 19 years. Our center was created to be dedicated to the
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
                            <div id="carouselSlides2" className="carousel slide myCarousel2" data-ride="carousel" data-interval="5000" data-wrap="true" >
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
                </main>

                {/* --------------footer-------------- */}
                <div className="container-fluid footer-container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <img className="Logo" src={Logo} alt="Logo" />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <p className="footer-text">
                                <i className="fa fa-map-marker fa-lg myIcon"></i>131 West Woodrow Street, Salt Lake City<br />
                                <i className="fa fa-phone-square myIcon"></i>801-266-0177<br />
                                <i className="fa fa-envelope myIcon"></i>smallfrischools@msn.com<br />
                                <a href="https://www.facebook.com/groups/smallfriacademy/" className="footer-link"><i className="fa fa-facebook-square myIcon"></i>Facebook</a>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <p className="copyright">&#169;2019 Small Fri Academy - All rights reserved.</p>
                        </div>
                        <div className="col-6 text-right">
                            <a className="copyright builtby" href="https://www.traegerwinn.com/"><p>Small Fri Academy was built by Traeger Winn</p></a>
                        </div>
                    </div>
                </div>
                {/* ----------end of footer---------- */}

            </div>
        )
    }
}
export default Home;