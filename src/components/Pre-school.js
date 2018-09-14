import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import '../Style.css'
import Age3Pic1 from '../Photos&Fonts/3yr-1.jpg'
import Age3Pic2 from '../Photos&Fonts/3yr-2.jpg'

class PreSchool extends Component {
    render() {
        return (
            <div className="Pre-Body">

                <NavBar />

                <main className="Pre-Main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <h1>Pre-School(Ages 3-4)</h1>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <p className="Pre-About">
                                    The three/four year olds love to learn and play. At this age social skills such as sharing, turn taking, and following
                                    routines are very important. Much care is taken to design a daily schedule that meets the social as well as the
                                    developmental needs of your pre-schooler. Every day the children will be engaged in numerous activities, which lead
                                    to developmental growth.
                                    </p>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 divider">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                <img className="Pre-Pic1" src={Age3Pic1} alt="3 Year Olds" />
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12 list1">
                                <ul>
                                    <li>
                                        Small motor skills activities include experimenting with play doh, stringing beads, lacing activities, cutting paper with toddler safe
                                        scissors, building with blocks and legos, etc.
                                        </li>
                                    <li>
                                        Large motor skills activities include games which teach hopping, jumping, skipping, galloping, somersaults, and basic tumbling.
                                        </li>
                                    <li>
                                        Cognitive development includes a full preschool program for two three and four olds.
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
                            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12 list1">
                                <ul>
                                    <li>
                                        Drama includes games in which children get to use their imaginations and pretend to be different animals or characters. We also use dress
                                        ups and props to help enhance the growing imagination.
                                    </li>
                                    <li>
                                        Art We use an array of materials for the children to create fun paintings, and crafts to take home and share with the family.
                                    </li>
                                    <li>
                                        Music awareness includes several areas of learning:
                                    </li>
                                    <ul>
                                        <li>
                                            Singing finger play songs
                                        </li>
                                        <li>
                                            Dancing and moving to various genres of music (classical, country, modern) using props such as ribbons, bells and scarves
                                        </li>
                                        <li>
                                            Games, which teach awareness of 3 and 4, count rhythms
                                        </li>
                                        <li>
                                            Creating musical instruments to march in a marching band
                                        </li>
                                    </ul>
                                </ul>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                <img className="Pre-Pic2" src={Age3Pic2} alt="3 Year Olds" />
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
export default PreSchool;