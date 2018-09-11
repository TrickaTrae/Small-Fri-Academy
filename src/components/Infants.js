import React, { Component } from 'react';
import NavBar from './NavBar'
import '../Style.css'

class Infants extends Component {
    render() {
        return (
            <div>
                <NavBar />

                <h1>Hello from Infants Page</h1>

                <p>
                    We know infants need lots of love and care. Our infant teachers are very well trained to meet the ever changing needs of your infant.
                    Much care is taken on the part of the teachers to learn everything about your little one. Our teachers also take Infant and Toddler training
                    courses, to best meet the needs your infant. At Small Fri Academy, we let your baby eat when hungry, and sleep when tired. We do not expect
                    infants to be on a schedule. The teachers in our infant rooms have lots of experience working with babies, and we love having the little ones
                    here.
                </p>

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
        )
    }
}
export default Infants;