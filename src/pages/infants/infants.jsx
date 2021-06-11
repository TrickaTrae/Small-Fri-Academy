import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './infants.css';
import InfantPic1 from '../../assetts/infant-1.jpg';
import InfantPic2 from '../../assetts/infant-2.jpg';

class Infants extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="Infant-Body">
                <main className="Infant-Main">
                    <div className="container-fluid pt-5">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <h1 className="infant-title">Infants</h1>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <p className="Infant-About">
                                    We know infants need lots of love and care. Our infant teachers are very well trained to meet the ever changing needs of your infant.
                                    Much care is taken on the part of the teachers to learn everything about your little one. Our teachers also take Infant and Toddler training
                                    courses, to best meet the needs your infant. At Small Fri Academy, we let your baby eat when hungry, and sleep when tired. We do not expect
                                    infants to be on a schedule. The teachers in our infant rooms have lots of experience working with babies, and we love having the little ones
                                    here.
                                </p>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 divider">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                <img className="Infant-Pic1" src={InfantPic1} alt="Infant" />
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12 infant-list">
                                <ul>
                                    <li>Cognitive development</li>
                                    <ul>
                                        <li>
                                            Children under the age of 2 participate in a learning program in which they are exposed daily to numbers, letters, shapes, colors, animals,
                                            animal sounds and basic vocabulary building.
                                        </li>
                                    </ul>
                                    <li>
                                        Story time includes stories read from books, and stories told with puppets or props. Stories also include child participation; teach memory
                                        skills and sequencing techniques.
                                    </li>
                                    <li>
                                        Music awareness includes finger play songs, singing to the infants, and listening to various types of children's music.
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 pic2row">
                                <img className="Infant-Pic2" src={InfantPic2} alt="Infant" />
                            </div>

                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 divider">
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 contact-column">
                                <Link to="/Contact"><button className="contact-button">Contact Us &#187;</button></Link>
                            </div>
                        </div>
                    </div>
                </main>


            </div>
        )
    }
}
export default Infants;