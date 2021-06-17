import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Clock from '../../assetts/clock.png';
import Ages from '../../assetts/Ages.jpg';
import Sandwich from '../../assetts/sandwich.png';
import Motto from '../../components/motto/motto';

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
                        <h1 className="m-0 text-center pb-1">Hours of Operation</h1>
                        <h4 className="m-0 text-center">
                            Monday - Friday, 7:00am - 6:00pm
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
                        <h1 className="m-0 text-center pb-1">Age Care Range</h1>
                        <h4 className="m-0 text-center">
                            We care for children from 12 weeks to 9 years old
                        </h4>
                    </div>
                </div>

                <div className="row py-4 d-flex align-items-center justify-content-center">
                    <div className="col-8 col-sm-8 col-md-6 col-lg-4">
                        <h1 className="m-0 text-center pb-1">Meals Provided</h1>
                        <h4 className="m-0 text-center">
                            We provide breakfast, lunch, and snacks through-out the day
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

    management = () => {
        return (
            <div className="container pt-4 pb-5">
                <div className="row py-5">
                    <div className="col-12">
                        <h1 className="m-0 display-2 fw-normal text-center">Message From Management</h1>
                    </div>
                </div>
                <div className="row pb-5 d-flex align-items-center justify-content-center">
                    <div className="col-12 col-lg-6">
                        <h4 className="m-0 pb-4">
                            Small Fri Academy has been offering child care for 19 years. Our center was created to be dedicated to the
                            mental, social, emotional and physical growth of children. The utmost consideration and preparation is taken
                            in planning a daily schedule that meets the needs of your child. Our center has a home like atmosphere and
                            quality teachers who look forward to spending each day with your child. Our easy access to the I-15 freeway
                            makes for a quick commute to work. We would love to give you a tour of our center!
                        </h4>
                    </div>
                    <div className="col-12 col-lg-6">
                        <img className="img-fluid rounded" src="https://small-fri-academy.s3.us-west-1.amazonaws.com/directors3.jpg" alt="Directors" />
                    </div>
                </div>
            </div>
        )

    }

    render() {
        return (
            <div id="home">
                {this.carousel()}
                {this.about()}
                <Motto/>
                {this.management()}
            </div>
        )
    }
}
export default Home;