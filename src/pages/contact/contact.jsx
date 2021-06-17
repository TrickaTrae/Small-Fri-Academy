import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="fade-in-fwd">
            <div className="container py-5">
                <div className="row py-4">
                    <div className="col-12 text-center">
                        <h1 className="m-0 display-2 fw-normal">Contact Us</h1>
                    </div>
                </div>

                <div className="row py-4">
                    <div className="col-12 text-center">
                        <h4 className="m-0 py-1">
                            Monday - Friday, 7:00AM - 6:00PM
                        </h4>
                        <h4 className="m-0 py-1">
                            <a href="https://goo.gl/maps/FwZst3N8iEaxboU2A" className="text-dark">
                                <i className="fa fa-map-marker fa-lg"></i>
                                <span className="px-1">131 W Woodrow St, Salt Lake City, UT 84107</span>
                            </a>
                        </h4>
                        <h4 className="m-0 py-1">
                            smallfrischools@msn.com
                        </h4>
                        <h4 className="m-0 py-1">
                            801-266-0177
                        </h4>
                        <h4 className="m-0 py-1">
                            <a href="https://www.facebook.com/groups/smallfriacademy/" className="text-dark">
                                <i className="fa fa-facebook-square fa-lg"></i>
                            </a>
                        </h4>
                    </div>
                </div>

                <div className="row py-4 p-1">
                    <div className="col-12 border border-secondary rounded p-5">
                        <form action="https://formspree.io/smallfrischools@msn.com" method="POST">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="name" className="form-control" id="name" aria-describedby="name" required minLength="2" maxLength="40"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="email" required minLength="6" maxLength="55"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input type="phone" className="form-control" id="phone" required minLength="6" maxLength="55"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="text" className="form-label">Your Message</label>
                                <textarea type="text" className="form-control" id="text" rows="3" required minLength="20" maxLength="2000"></textarea>
                            </div>
                            <button type="submit" value="Submit" className="btn btn-outline-dark btn-lg px-5">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;