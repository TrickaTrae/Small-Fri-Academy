import React, { Component } from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import '../Style.css'
import IMG1 from '../Photos&Fonts/IMG1.jpg'
import IMG2 from '../Photos&Fonts/IMG2.jpg'
import IMG3 from '../Photos&Fonts/IMG3.jpg'
import IMG4 from '../Photos&Fonts/IMG4.jpg'

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

                <Footer />

            </div>
        )
    }
}
export default Home;