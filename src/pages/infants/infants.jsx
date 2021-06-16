import React, { Component } from 'react';

class Infants extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div id="infants">
                <img className="img-fluid" src="https://small-fri-academy.s3.us-west-1.amazonaws.com/infant-2.jpg" alt="Infant" />

                <div className="container py-5">
                    <div className="row py-4">
                        <div className="col-12 text-center">
                            <h1 className="m-0 display-2 fw-normal">Infants</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h4 className="m-0">
                                We know infants need lots of love and care. Our infant teachers are very well trained to meet the ever changing needs of your infant.
                                Much care is taken on the part of the teachers to learn everything about your little one. Our teachers also take Infant and Toddler training
                                courses, to best meet the needs of your infant. At Small Fri Academy, we let your baby eat when hungry, and sleep when tired. We do not expect
                                infants to be on a schedule. The teachers in our infant rooms have lots of experience working with babies, and we love having the little ones
                                here.
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="container pb-5">
                    <div className="row py-4 d-flex align-items-center justify-content-center">
                        <div className="col-12 col-md-8 pb-4">
                            <h4 className="m-0">
                                Children under the age of 2 participate in a learning program in which they are exposed daily to numbers, letters, shapes, colors, animals,
                                animal sounds and basic vocabulary building.
                                <br/><br/>
                                Story time includes stories read from books, and stories told with puppets or props. Stories also include child participation; teaching memory
                                skills and sequencing techniques.
                                <br/><br/>
                                Music awareness includes finger play songs, singing to the infants, and listening to various types of children's music.
                            </h4>
                        </div>
                        <div className="col-12 col-md-4">
                            <img className="img-fluid rounded" src="https://small-fri-academy.s3.us-west-1.amazonaws.com/infant-1.jpg" alt="Infant" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Infants;