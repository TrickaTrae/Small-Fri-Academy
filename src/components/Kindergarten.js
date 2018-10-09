import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import '../Style.css'
import KindergartenPic1 from '../Photos&Fonts/Kindergarten-1.jpg'
import KindergertenPic2 from '../Photos&Fonts/Kindergarten-2.jpg'

class Kindergarten extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="Kindergarten-Body">

                <NavBar />

                <main className="Kindergarten-Main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <h1 className="kindergarten-title">Kindergarten/School Age</h1>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <p className="Kindergarten-About">
                                    We transport to neighborhood schools for Kindergarten. We offer Breakfast, Lunch and Snack on site to children, before
                                    and after school. We know Kindergarteners are full of energy, and we create a curriculum which provides stimulating,
                                    hands on activities, as well as active games to allow the children to use all that energy they have before and after
                                    school. We offer summer time field trips to the kindergarteners when they are out of school.
                                </p>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 divider">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                <img className="Kindergarten-Pic1" src={KindergartenPic1} alt="School Age Kids" />
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12 list3">
                                <ul>
                                    <li>
                                        Large motor skills activities include games which teach hopping, jumping, skipping, galloping, somersaults, and basic tumbling.
                                </li>
                                    <li>
                                        Social skills include games in which children learn how to work as a team and in partners. Such games include working together to play
                                        parachute games, hide and seek, Red rover, London bridges, Ring around the Rosies, etc.
                                </li>
                                    <li>
                                        Story time includes stories read from books, and stories told with puppets or props. Stories also include child participation; teach memory
                                        skills and sequencing techniques.
                                </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row row2">
                            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12 list3">
                                <ul>
                                    <li>
                                        Drama includes games in which children get to use their imaginations and pretend to be different animals or characters. We also use dress
                                        ups and props to help enhance the growing imagination
                                    </li>
                                    <li>
                                        Art we use an array of materials for the children to create fun paintings, and crafts to take home and share with the family.
                                    </li>
                                    <li>
                                        Music awareness includes several areas of learning:
                                    </li>
                                    <ul>
                                        <li>
                                            Singing finger play songs
                                        </li>
                                        <li>
                                            Dancing and moving to various genres of music (classical, country, modern) using props such as ribbons, bells and scarves.
                                        </li>
                                        <li>
                                            Games, which teach awareness of 3 and 4, count rhythms.
                                        </li>
                                        <li>
                                            Creating musical instruments to march in a marching band
                                        </li>
                                    </ul>
                                </ul>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                <img className="Kindergarten-Pic2" src={KindergertenPic2} alt="School Age Kids" />
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 divider">
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 contact-column">
                                <Link to="/Contact"><button className="contact-button">Contact Us &#187;</button></Link>
                            </div>
                        </div>
                    </div>
                </main>


            </div >
        )
    }
}
export default Kindergarten;