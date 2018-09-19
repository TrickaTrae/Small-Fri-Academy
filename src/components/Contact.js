import React, { Component } from 'react';
import NavBar from './NavBar'
import '../Style.css'

class Contact extends Component {
    render() {
        return (
            <div>

                <NavBar />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <form action="https://formspree.io/soccer4goals@hotmail.com" method="POST" className="myForm">
                                <p className="formTitle">Questions/Comments/Concerns</p>
                                <input type="text" name="name" placeholder="*Name" required minLength="2" maxLength="40" className="myInput" /><br />
                                <input type="email" name="email" placeholder="*Email" required minLength="6" maxLength="55" className="myInput" /><br />
                                <input type="text" name="number" placeholder="Number" className="myInput" /><br />
                                <textarea type="text" name="message" placeholder="*Your Message..." required minLength="20" maxLength="400" className="messageInput"></textarea><br />
                                <input type="submit" value="Submit" className="form-button"/>
                            </form>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            hello
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
export default Contact;