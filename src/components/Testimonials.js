import React, { Component } from 'react';
import NavBar from './NavBar'
import '../Style.css'

class Testimonials extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>

                <NavBar />

                <main className="test-main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <p className="test-title"><i className="fa fa-quote-left test-quote"></i>Testimonials</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 left-column">
                                <p className="testimonial-left">
                                    <span className="quoteLeft">“</span>We are grateful we found Small Fri Academy. It is nice to have someone you trust
                                    transporting your child to and from elementary school and not worrying about it while at work. The teachers are
                                    great with the kids and our son really enjoys being there. We are expecting another child and looking forward
                                    to many more years here!<span className="quoteRight">”</span>
                                    <br /><br />
                                    - Charles and Teresa B.
                                </p>
                                <p className="testimonial-left">
                                    <span className="quoteLeft">“</span>We  have been taking our son to Small Fri for 3 years. I truly appreciate the
                                    job they do every day. Thank you so much for taking such good care of our son.<span className="quoteRight">”</span>
                                    <br /><br />
                                    - Sara
                                </p>
                                <p className="testimonial-left">
                                    <span className="quoteLeft">“</span>My daughter loves coming to Small Fri Academy. She is excited to put on her shoes to go
                                     to the day care in the morning. Even when she started at 5 months old the teachers made her happy and welcome, so drop
                                    off was never really a challenge for us. I originally chose Small Fri Academy for its location, close to the train
                                    station and my house, but now I'm so happy we chose it. They are extremely flexible with my child and let her take extra
                                    naps and snacks when she needs them. They are also able to tell me exactly how much she slept and ate each day, so I
                                    always am up-to-date. I feel like my kid gets individual care here and I never have to worry if she's getting enough
                                    attention during the day.<span className="quoteRight">”</span>
                                    <br /><br />
                                    - Emily
                                </p>
                                <p className="testimonial-left">
                                    <span className="quoteLeft">“</span>My wife and I have 5 children, all of which have attended
                                    Small Fri Academy. They all started as infants in the Wiggle Frogs room, and stayed until 1st
                                    grade in the Bouncy Tigers room. Our youngest still attends Small Fri Academy, and we have been
                                    nothing but satisfied! The teachers are well trained, kind, and professional, they always
                                    accommodate to the hours we need, they follow a great curriculum, and they provide a healthy
                                    breakfast, lunch, and snack each day! Our kids never wanted to leave their friends and teachers                                        at the end of the day! It is wonderful to find a daycare you can trust, and love coming to each
                                    day!<span className="quoteRight">”</span>
                                    <br /><br />
                                    - Jax and Shannon S.
                                </p>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <p className="testimonial-right">
                                    <span className="quoteLeft">“</span>The teachers at Small Fri have taught my children so much. When I pick them up
                                    each day, they don't want to go home. They feel so comfortable at Small Fri. Thanks for all the great
                                    work!<span className="quoteRight">”</span>
                                    <br /><br />
                                    - Brad B.
                                </p>
                                <p className="testimonial-right">
                                    <span className="quoteLeft">“</span>My daughter gets up every morning and loves going to school at Small Fri. All
                                    the teachers are so loving and caring. We especially love her teacher , Veronica. It is so nice to be able to
                                    go to work and not have to worry about my daughter each day.<span className="quoteRight">”</span>
                                    <br /><br />
                                    - Nicolette
                                </p>
                                <p className="testimonial-right">
                                    <span className="quoteLeft">“</span>Small Fri Academy has been the best choice we have made for our
                                        son. He loves being there, the teachers and directors are amazing and very helpful. I love when
                                        I pick him up and see all the 2 year olds sitting at the table like such big kids doing their
                                        activities! He has learned so much already from being there and he surprises me with new skills
                                        every day!<span className="quoteRight">”</span>
                                    <br /><br />
                                    - Kathryn H.
                                </p>
                                <p className="testimonial-right">
                                    <span className="quoteLeft">“</span>I am a new mother, and started my 8 month old son at Small Fri
                                        Academy 4 months ago. I was terrified to leave my baby at a child care facility, and looked at 9
                                        facilities near my home and work before finding Small Fri. I knew as soon as I met his teacher,
                                        this was the best fit for us! His teacher is so kind, listens and fulfills every request and need
                                        I have for my baby, communicates with me throughout the day, and will update me with pictures,
                                        she also sends home a paper stating everything his did throughout the day (eating, sleeping,
                                        diaper changes, mood) so that I know how everything went with my baby boys day! I feel so happy
                                        and comfortable leaving my baby here each day, I couldn’t ask for a better
                                        daycare!<span className="quoteRight">”</span>
                                    <br /><br />
                                    - Leslie K.
                                </p>
                                <p className="testimonial-right">
                                    <span className="quoteLeft">“</span>We love Small Fri Academy! We are so happy we found a
                                    daycare/preschool where we feel comfortable leaving our daughter,  she is happy and well taken
                                    care of every single day. Her speech improved and she gets excited to go every morning.<br /><br />
                                    The staff are very nice and loving. They also help potty train our daughter and that's amazing.<br /><br />
                                    A million times thanks to you all!<span className="quoteRight">”</span>
                                    <br /><br />
                                    - Amonrat H.
                                </p>
                            </div>


                        </div>

                    </div>
                </main>


            </div>
        )
    }
}
export default Testimonials;