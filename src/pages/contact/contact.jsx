import React, { Component } from 'react';
import './contact.css';
// import {
//     Map,
//     Marker,
//     GoogleApiWrapper
// } from 'google-maps-react';


class Contact extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className="container-fluid pt-5">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h1 className="contact-title">Contact Us</h1>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <form action="https://formspree.io/smallfrischools@msn.com" method="POST" className="myForm">
                                <p className="formTitle">Questions/Comments/Concerns</p>
                                <input type="text" name="name" placeholder="*Name" required minLength="2" maxLength="40" className="myInput" /><br />
                                <input type="email" name="email" placeholder="*Email" required minLength="6" maxLength="55" className="myInput" /><br />
                                <input type="text" name="number" placeholder="Phone" className="myInput" /><br />
                                <textarea type="text" name="message" placeholder="*Your Message..." required minLength="20" maxLength="400" className="messageInput"></textarea><br />
                                <input type="submit" value="Submit" className="form-button" />
                            </form>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <p className="contact-text">
                                <i className="fa fa-clock-o myIcon"></i>Hours: 7:00AM - 6:00PM<br />
                                <i className="fa fa-map-marker fa-lg myIcon"></i>131 West Woodrow Street, Salt Lake City<br />
                                <i className="fa fa-phone-square myIcon"></i>801-266-0177<br />
                                <i className="fa fa-envelope myIcon"></i>smallfrischools@msn.com<br />
                                <a href="https://www.facebook.com/groups/smallfriacademy/" className="contact-link"><i className="fa fa-facebook-square myIcon"></i>Facebook</a>

                            </p>
                            {/* <Map className="myMap"

                                google={this.props.google}
                                initialCenter={{
                                    lat: 40.6537629,
                                    lng: -111.8947955
                                }}
                                zoom={14}
                            >
                                <Marker
                                    title={'Small Fri Academy'}
                                    position={{ lat: 40.6537629, lng: -111.8947955 }}
                                />
                            </Map> */}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyCLWgKkRuEsTdaRLs06dC4alvxOOOBPOUY")
// })(Contact)

export default Contact;