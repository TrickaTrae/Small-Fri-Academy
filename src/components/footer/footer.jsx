import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import Logo from '../../assetts/Small-Fri-Logo-Transparent.png';

class Footer extends Component {

    testimonials = () => {
        return (
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="m-0 display-2 fw-normal text-white">What Small Fri Parents Say</h1>
                    </div>
                </div>

                <div className="row carousel-row">
                    <div id="footerCarousel" className="carousel slide px-5" data-bs-ride="carousel">
                        <div className="carousel-inner carousel-inner-testimonials px-5">
                            <div className="carousel-item active carousel-item-testimonials">
                                <span className="text-white">
                                    “Small Fri Academy has been the best choice we have made for our
                                    son. He loves being there, the teachers and directors are amazing and very helpful. I love when
                                    I pick him up and see all the 2 year olds sitting at the table like such big kids doing their
                                    activities! He has learned so much already from being there and he surprises me with new skills
                                    every day!”
                                </span>
                                <br/>
                                <span className="fw-bold text-white">- Kathryn H.</span>
                            </div>
                            <div className="carousel-item carousel-item-testimonials">
                                <span className="text-white">
                                    “My wife and I have 5 children, all of which have attended
                                    Small Fri Academy. They all started as infants in the Wiggle Frogs room, and stayed until 1st
                                    grade in the Bouncy Tigers room. Our youngest still attends Small Fri Academy, and we have been
                                    nothing but satisfied! The teachers are well trained, kind, and professional, they always
                                    accommodate to the hours we need, they follow a great curriculum, and they provide a healthy
                                    breakfast, lunch, and snack each day! Our kids never wanted to leave their friends and teachers
                                    at the end of the day! It is wonderful to find a daycare you can trust, and love coming to each
                                    day!”
                                </span>
                                <br/>
                                <span className="fw-bold text-white">- Jax and Shannon S.</span>
                            </div>
                            <div className="carousel-item carousel-item-testimonials">
                                <span className="text-white">
                                    “I am a new mother, and started my 8 month old son at Small Fri
                                    Academy 4 months ago. I was terrified to leave my baby at a child care facility, and looked at 9
                                    facilities near my home and work before finding Small Fri. I knew as soon as I met his teacher,
                                    this was the best fit for us! His teacher is so kind, listens and fulfills every request and need
                                    I have for my baby, communicates with me throughout the day, and will update me with pictures,
                                    she also sends home a paper stating everything he did throughout the day (eating, sleeping,
                                    diaper changes, mood) so that I know how everything went with my baby boys day! I feel so happy
                                    and comfortable leaving my baby here each day, I couldn’t ask for a better
                                    daycare!”
                                </span>
                                <br/>
                                <span className="fw-bold text-white">- Leslie K.</span>
                            </div>
                            <div className="carousel-item carousel-item-testimonials">
                                <span className="text-white">
                                    “We love Small Fri Academy! We are so happy we found a
                                    daycare/preschool where we feel comfortable leaving our daughter,  she is happy and well taken
                                    care of every single day. Her speech improved and she gets excited to go every morning.
                                    The staff are very nice and loving. They also help potty train our daughter and that's amazing.
                                    A million times thanks to you all!”
                                </span>
                                <br/>
                                <span className="fw-bold text-white">- Amonrat H.</span>
                            </div>
                            <div className="carousel-item carousel-item-testimonials">
                                <span className="text-white">
                                    “My daughter gets up every morning and loves going to school at Small Fri. All
                                    the teachers are so loving and caring. We especially love her teacher, Veronica. It is so nice to be able to
                                    go to work and not have to worry about my daughter each day.”
                                </span>
                                <br/>
                                <span className="fw-bold text-white">- Nicolette</span>
                            </div>
                            <div className="carousel-item carousel-item-testimonials">
                                <span className="text-white">
                                    “The teachers at Small Fri have taught my children so much. When I pick them up
                                    each day, they don't want to go home. They feel so comfortable at Small Fri. Thanks for all the great
                                    work!”
                                </span>
                                <br/>
                                <span className="fw-bold text-white">- Brad B.</span>
                            </div>
                            <div className="carousel-item carousel-item-testimonials">
                                <span className="text-white">
                                    “My daughter loves coming to Small Fri Academy. She is excited to put on her shoes to go
                                    to the day care in the morning. Even when she started at 5 months old the teachers made her happy and welcome, so drop
                                    off was never really a challenge for us. I originally chose Small Fri Academy for its location, close to the train
                                    station and my house, but now I'm so happy we chose it. They are extremely flexible with my child and let her take extra
                                    naps and snacks when she needs them. They are also able to tell me exactly how much she slept and ate each day, so I
                                    always am up-to-date. I feel like my kid gets individual care here and I never have to worry if she's getting enough
                                    attention during the day.”
                                </span>
                                <br/>
                                <span className="fw-bold text-white">- Emily</span>
                            </div>
                            <div className="carousel-item carousel-item-testimonials">
                                <span className="text-white">
                                    “We  have been taking our son to Small Fri for 3 years. I truly appreciate the
                                    job they do every day. Thank you so much for taking such good care of our son.”
                                </span>
                                <br/>
                                <span className="fw-bold text-white">- Sara</span>
                            </div>
                            <div className="carousel-item carousel-item-testimonials">
                                <span className="text-white">
                                    “We are grateful we found Small Fri Academy. It is nice to have someone you trust
                                    transporting your child to and from elementary school and not worrying about it while at work. The teachers are
                                    great with the kids and our son really enjoys being there. We are expecting another child and looking forward
                                    to many more years here!”
                                </span>
                                <br/>
                                <span className="fw-bold text-white">- Charles and Teresa B.</span>
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#footerCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#footerCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    info = () => {
        return (
            <div className="container pt-2">
                <div className="row py-4 d-flex align-items-center justify-content-center">
                    <div className="col-12 col-md-4 d-flex align-items-center justify-content-center py-4">
                        <img className="logo" src={Logo} alt="Small Fri Logo" />
                    </div>
                    <div className="col-12 col-md-4 text-center py-4">
                        <Link to="/about" className="text-white">About</Link><br/>
                        <Link to="/infants" className="text-white">Infants</Link><br/>
                        <Link to="/2-year-olds" className="text-white">2 year olds</Link><br/>
                        <Link to="/pre-school" className="text-white">Pre-School</Link><br/>
                        <Link to="/kindergarten" className="text-white">Kindergarten</Link><br/>
                        <Link to="/contact" className="text-white">Contact</Link>
                    </div>
                    <div className="col-12 col-md-4 text-center py-4">
                        <span className="text-white">Monday - Friday, 7:00AM - 6:00PM</span>
                        <br/>
                        <a href="https://goo.gl/maps/FwZst3N8iEaxboU2A" className="text-white">
                            <i className="fa fa-map-marker fa-lg"></i>
                            <span className="text-white px-1">131 W Woodrow St, Salt Lake City, UT 84107</span>
                        </a>
                        <br/>
                        <span className="text-white">smallfrischools@msn.com</span>
                        <br/>
                        <span className="text-white">801-266-0177</span>
                        <br/>
                        <span>
                            <a href="https://www.facebook.com/groups/smallfriacademy/" className="text-white">
                                <i className="fa fa-facebook-square fa-lg text-white"></i>
                            </a>
                        </span>
                    </div>
                </div>

                <div className="row pt-4 pb-3">
                    <div className="col-12 text-center">
                        <small className="text-white">&#169;</small>
                        <small className="text-white px-1">2021 Small Fri Academy - All rights reserved.</small>
                    </div>
                </div>
            </div>
        )
    }

    render() { 
        return (
            <div id="footer" className="pt-5">
                {this.testimonials()}

                <div className="container-fluid">
                    <div className="row">
                        <div className="border-bottom border-light"></div>
                    </div>
                </div>

                {this.info()}
            </div>
        );
    }
}
export default Footer;