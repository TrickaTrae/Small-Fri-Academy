import React, { Component } from 'react';
import NavBar from './NavBar'
import '../Style.css'
import Nutrition from '../Photos&Fonts/Nutrition-Table.png'
import Building from '../Photos&Fonts/building.jpg'

class About extends Component {
    render() {
        return (
            <div className="about-body">

                <NavBar />

                <main className="about-main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <p className="about-title">About The Owner/Business</p>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <p className="about-par">
                                    Let me start by letting you know that I love working with children. My entire career has been dedicated to the service
                                    of children. In college, I earned my Bachelors degree in English, and a second Bachelors degree in Sociology. I continued
                                    my education to earn a certification in Criminology and Corrections. During college I worked at the Salt Lake Detention Center
                                    Counseling youth, from there I worked in a group home for children with Autism. I then went back to school and earned my Teaching
                                    Certificate. With my certificate I had a great time teaching Second, Fifth, and Sixth grade.<br /><br />
                                    While raising a young child having one on the way, going to school, and working I was faced with the challenge of finding what I
                                    considered to be adequate childcare. I searched several facilities in my area, and to my disappointment, I was unable to find a
                                    childcare facility that met my expectations. What I have learned through teaching elementary school is that children are
                                    born with a natural desire to learn and explore. They thrive on structure and exposure to new and exciting activities. I decided
                                    to leave my career of teaching elementary school to create a facility that meets the needs and desires of young children.<br /><br />
                                    I created Small Fri Academy in 1999 to be dedicated to the mental, social, emotional, and physical growth of children. The utmost consideration and
                                    preperation is taken in planning a daily schedule that meets the needs of your child. Where ever you do choose to leave your child
                                    on a daily basis, ask yourself if you would be willing to spend 10 hours a day, 5 days a week in the same environment you leave your child.
                            </p>
                                <img className="buildingPic" src={Building} alt="Small Fri Building" />
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <p className="about-subTitle">About The Staff</p>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <p className="employee-par">
                                    All employees hired at Small Fri Academy are required to complete basic training in the areas of First
                                    Aid/CPR and food handlers permits. In addition all of our staff members must clear a background check and
                                    random drug testing. All staff members are required to complete training courses pertaining to early child
                                    development 4 times per year, in order to better meet the need of your child. All of our staff members have
                                    had previous experience in working with children, and greatly enjoy what they do.
                            </p>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <p className="about-subTitle">Nutrition Program</p>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <p className="nutrition-par">
                                    Our center participates in the Child Nutrition Program. All meals are prepared according to the nutrition
                                    requirements established by USDA’s Child Nutrition Program.
                            </p>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <img className="Nutrition" src={Nutrition} alt="Nutrition Table" />
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        )
    }
}
export default About;

// Brain research has proven that the most influential growing period for the human brain is from birth to about five years of age.
//                                 At this time, millions of brain cells are making connections based on experiences and lots of stimulation. "Children who are denied
//                                 adequate stimulation and learning experiences have brains 40% smaller as adults."(Dr. Bruce Perry) At the age of five, the brain
//                                 starts to get rid of the brain cells that were not stimulated and did not make connections in the earlier years of life. These
//                                 cells can never be replaced again.<br/>
//                                 The care a child recieves from birth to age five is more vital than people realize. Merely feeding a child and changing diapers
//                                 is not enough! "40 percent of children in care, are in care that is destructive to their growth."(Dr Bruce Perry) Research shows
//                                 that children who score the highest on tests are those who had been interacted with in early childhood.