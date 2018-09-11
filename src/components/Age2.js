import React, {Component} from 'react';
import NavBar from './NavBar'
import '../Style.css'

class Age2 extends Component {
    render(){
        return(
            <div>
                <NavBar/>

                <h1>Hello from 2 year olds Page</h1>

                <p>
                We know two years olds are active, curious and creative. Our classroom has age appropriate materials to allow your two year old to safely learn
                and explore. Every day the children will be engaged in numerous activities, which lend to developmental growth.
                </p>

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
                    <li>
                        Drama includes games in which children get to use their imaginations and pretend to be different animals or characters. We also use dress 
                        ups and props to help enhance the growing imagination
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
        )
    }
}
export default Age2;