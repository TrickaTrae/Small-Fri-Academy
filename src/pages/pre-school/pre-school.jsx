import React, { Component } from 'react';

class PreSchool extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div id="preschool">
                <img className="img-fluid w-100" src="https://small-fri-academy.s3.us-west-1.amazonaws.com/3yr-2.jpg" alt="3 Year Olds" />

                <div className="container py-5">
                    <div className="row py-4">
                        <div className="col-12 text-center">
                            <h1 className="m-0 display-2 fw-normal">Pre-School</h1>
                        </div>
                    </div>

                    <div className="row py-4">
                        <div className="col-12">
                            <div className="h4 m-0">
                                The three and four year olds love to learn and play. At this age social skills such as sharing, turn taking, and following
                                routines are very important. Much care is taken to design a daily schedule that meets the social as well as the
                                developmental needs of your pre-schooler. Every day the children will be engaged in numerous activities, which lead
                                to developmental growth.
                                <br/><br/>
                                Small motor skill activities include experimenting with play doh, stringing beads, lacing activities, cutting paper with toddler safe
                                scissors, building with blocks and legos, etc. Large motor skill activities include games which teach hopping, jumping, skipping, galloping,
                                somersaults, and basic tumbling.
                                <br/><br/>
                                Cognitive development includes a full preschool program for two, three, and four olds.
                                <br/><br/>
                                Social skills include games in which children learn how to work as a team and in partners. Such games include working together to play
                                parachute games, hide and seek, red rover, london bridges, ring around the rosies, etc.
                            </div>
                        </div>
                    </div>

                    <div className="row py-4">
                        <div className="col-12 col-lg-4 pb-5">
                            <img className="img-fluid rounded" src="https://small-fri-academy.s3.us-west-1.amazonaws.com/3yr-1.jpg" alt="3 Year Olds" />
                        </div>
                        <div className="col-12 col-lg-8">
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
export default PreSchool;