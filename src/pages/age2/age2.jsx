import React, { Component } from 'react';

class Age2 extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div id="age2">
                <img className="img-fluid w-100" src="https://small-fri-academy.s3.us-west-1.amazonaws.com/2yr-3.jpg" alt="2 Year Olds" />

                <div className="container py-5">
                    <div className="row py-4">
                        <div className="col-12 text-center">
                            <h1 className="m-0 display-2 fw-normal">Two Year Olds</h1>
                        </div>
                    </div>

                    <div className="row py-4">
                        <div className="col-12">
                            <h4 className="m-0">
                                We know two years olds are active, curious, and creative. Our classroom has age appropriate materials to allow your two year old to safely learn
                                and explore. Every day the children will be engaged in numerous activities, which lend to developmental growth.
                                <br/><br/>
                                Small motor skill activities include experimenting with play doh, stringing beads, lacing activities, cutting paper with toddler safe
                                scissors, building with blocks and legos, etc. Large motor skill activities include games which teach hopping, jumping, skipping, galloping,
                                somersaults, and basic tumbling.
                                <br/><br/>
                                Cognitive development includes a full preschool program for two, three, and four olds.
                                <br/><br/>
                                Social skills include games in which children learn how to work as a team and in partners. Such games include working together to play
                                parachute games, hide and seek, red rover, london bridges, ring around the rosies, etc.
                            </h4>
                        </div>
                    </div>

                    <div className="row py-4">
                        <div className="col-12 col-sm-6 pb-4">
                            <img className="img-fluid rounded" src="https://small-fri-academy.s3.us-west-1.amazonaws.com/2yr-1.jpg" alt="2 Year Old" />
                        </div>
                        <div className="col-12 col-sm-6">
                            <img className="img-fluid rounded" src="https://small-fri-academy.s3.us-west-1.amazonaws.com/2yr-2.jpg" alt="2 Year Olds" />
                        </div>
                    </div>

                    <div className="row py-4">
                        <div className="col-12">
                            <h4 className="m-0">
                                Story time includes stories read from books, and stories told with puppets or props. Stories also include child participation; teaching memory
                                skills and sequencing techniques.
                                <br/><br/>
                                Drama includes games in which children get to use their imaginations and pretend to be different animals or characters. We also use dress
                                ups and props to help enhance the growing imagination.
                                <br/><br/>
                                Art we use an array of materials for the children to create fun paintings and crafts to take home and share with the family.
                                <br/><br/>
                                Music awareness includes several areas of learning such as finger play songs, dancing and moving to various genres of music (classical, country, modern) with
                                props such as ribbons, bells and scarves, games which teach three and four count rhythms, and creating musical instruments to march in a marching band.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Age2;