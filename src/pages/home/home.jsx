import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Clock from '../../assetts/clock.png';
import Ages from '../../assetts/Ages.jpg';
import Sandwich from '../../assetts/sandwich.png';
import Logo from '../../assetts/Small-Fri-Logo-Transparent.png';


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
                        <img className="d-block w-100" src="https://small-fri-academy.s3.us-west-1.amazonaws.com/IMG6.jpg" alt="Pic1" />
                    </div>
                     <div className="carousel-item" data-bs-interval="4000">
                        <img className="d-block w-100" src="https://small-fri-academy.s3.us-west-1.amazonaws.com/IMG3.jpg" alt="Pic2" />
                    </div>
                     <div className="carousel-item" data-bs-interval="4000">
                        <img className="d-block w-100" src="https://small-fri-academy.s3.us-west-1.amazonaws.com/IMG2.jpg" alt="Pic3" />
                    </div>
                     <div className="carousel-item" data-bs-interval="4000">
                        <img className="d-block w-100" src="https://small-fri-academy.s3.us-west-1.amazonaws.com/IMG5.jpg" alt="Pic4" />
                    </div>
                     <div className="carousel-item" data-bs-interval="4000">
                        <img className="d-block w-100" src="https://small-fri-academy.s3.us-west-1.amazonaws.com/IMG4.jpg" alt="Pic5" />
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
            <div className="container py-4">
                <div className="row py-5">
                    <div className="col-12 text-center">
                        <h1 className="m-0 display-2 fw-normal">About Small Fri Academy</h1>
                    </div>
                </div>

                <div className="row py-4 d-flex align-items-center justify-content-center">
                    <div className="col-8 col-sm-8 col-md-6 col-lg-4">
                        <h1 className="m-0 text-center">Hours of Operation</h1>
                        <h4 className="m-0 text-center">
                            Monday - Friday<br/>
                            7:00am - 6:00pm
                        </h4>
                    </div>
                    <div className="col-4 col-sm-4 col-md-6 col-lg-8">
                        <img className="clock" src={Clock} alt="Clock" />
                    </div>
                </div>

                <div className="row py-4 d-flex align-items-center justify-content-center">
                    <div className="col-4 col-sm-4 col-md-6 col-lg-8">
                        <img className="ages" src={Ages} alt="Ages" />
                    </div>
                    <div className="col-8 col-sm-8 col-md-6 col-lg-4">
                        <h1 className="m-0 text-center">Age Care Range</h1>
                        <h4 className="m-0 text-center">
                            We care for children from<br/>
                            12 weeks to 9 years old
                        </h4>
                    </div>
                </div>

                <div className="row py-4 d-flex align-items-center justify-content-center">
                    <div className="col-8 col-sm-8 col-md-6 col-lg-4">
                        <h1 className="m-0 text-center">Meals We Provide</h1>
                        <h4 className="m-0 text-center">
                            We provide breakfast, lunch, and<br/>
                            snacks through-out the day
                        </h4>
                    </div>
                    <div className="col-4 col-sm-4 col-md-6 col-lg-8">
                        <img className="sandwich" src={Sandwich} alt="Sandwich" />
                    </div>
                </div>

                <div className="row py-5">
                    <div className="col-12 py-2 text-center">
                        <Link to="/About">
                            <button className="btn btn-outline-dark btn-lg px-5">
                                <h2 className="m-0">Learn More</h2>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    motto = () => {
        return (
            <div className="container-fluid motto-container">
                <div className="row motto-row py-2">
                    <div className="col-12 py-5">
                        <h1 className="m-0 text-white display-4 fw-normal text-center">
                            “Dedicated to the Mental, Social, Emotional, and Physical Growth of Children”
                        </h1>
                    </div>
                </div>
            </div>
        )
    }

    management = () => {
        return (
            <div className="container py-4">
                <div className="row py-5">
                    <div className="col-12">
                        <h1 className="m-0 display-2 fw-normal text-center">Message From Management</h1>
                    </div>
                </div>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-12 col-lg-6">
                        <h4 className="m-0 management-message">
                            Small Fri Academy has been offering child care for 19 years. Our center was created to be dedicated to the
                            mental, social, emotional and physical growth of children. The utmost consideration and preparation is taken
                            in planning a daily schedule that meets the needs of your child. Our center has a home like atmosphere and
                            quality teachers who look forward to spending each day with your child. Our easy access to the I-15 freeway
                            makes for a quick commute to work. We would love to give you a tour of our center!
                        </h4>
                    </div>
                    <div className="col-12 col-lg-6">
                        <img className="img-fluid rounded" src="https://small-fri-academy.s3.us-west-1.amazonaws.com/directors2.jpg" alt="Directors" />
                    </div>
                </div>
            </div>
        )

    }

    render() {
        return (
            <div>

                {this.carousel()}
                {this.about()}
                {this.motto()}
                {this.management()}

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