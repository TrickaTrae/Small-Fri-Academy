import React from 'react';
import Motto from '../../components/motto/motto';

const About = () => {
    return (
        <div id="about">
            <img className="img-fluid" src="https://small-fri-academy.s3.us-west-1.amazonaws.com/building.jpg" alt="Small Fri Academy Building" />

            <div className="container py-5">
                <div className="row py-4">
                    <div className="col-12 text-center">
                        <h1 className="m-0 display-2 fw-normal">About Small Fri Academy</h1>
                    </div>
                </div>

                <div className="row pb-5">
                    <div className="col-12">
                        <h4 className="m-0">
                            Let me start by letting you know that I love working with children. My entire career has been dedicated to the service
                            of children. In college, I earned my Bachelors degree in English, and a second Bachelors degree in Sociology. I continued
                            my education to earn a certification in Criminology and Corrections. During college I worked at the Salt Lake Detention Center
                            Counseling youth, from there I worked in a group home for children with Autism. I then went back to school and earned my Teaching
                            Certificate. With my certificate I had a great time teaching Second, Fifth, and Sixth grade.
                            <br/><br/>
                            While raising a young child, having one on the way, going to school, and working I was faced with the challenge of finding what I
                            considered to be adequate childcare. I searched several facilities in my area, and to my disappointment, I was unable to find a
                            childcare facility that met my expectations. What I have learned through teaching elementary school is that children are
                            born with a natural desire to learn and explore. They thrive on structure and exposure to new and exciting activities. I decided
                            to leave my career of teaching elementary school to create a facility that meets the needs and desires of young children.
                            <br/><br/>
                            I created Small Fri Academy in 1999 to be dedicated to the mental, social, emotional, and physical growth of children. The utmost consideration and
                            preperation is taken in planning a daily schedule that meets the needs of your child. Where ever you do choose to leave your child
                            on a daily basis, ask yourself if you would be willing to spend 10 hours a day, 5 days a week in the same environment you leave your child.
                        </h4>
                    </div>
                </div>
            </div>

            <Motto/>

            <div className="container py-5">
                <div className="row py-4">
                    <div className="col-12 text-center">
                        <h1 className="m-0 display-2 fw-normal">About The Staff</h1>
                    </div>
                </div>

                <div className="row">
                    <h4 className="m-0">
                        All employees hired at Small Fri Academy are required to complete basic training in the areas of First
                        Aid / CPR and food handlers permits. In addition all of our staff members must clear a background check and
                        random drug testing. All staff members are required to complete training courses pertaining to early child
                        development 4 times per year, in order to better meet the need of your child. All of our staff members have
                        had previous experience in working with children, and greatly enjoy what they do.
                    </h4>
                </div>
            </div>

            <div className="container py-5">
                <div className="row pb-4">
                    <div className="col-12 text-center">
                        <h1 className="m-0 display-2 fw-normal">The Nutrition Program</h1>
                    </div>
                </div>

                <div className="row pb-5">
                    <div className="col-12 col-md-6 pb-4">
                        <h4 className="m-0">
                            Our center participates in the Child Nutrition Program. All meals are prepared according to the nutrition
                            requirements established by USDA’s Child Nutrition Program.
                        </h4>
                    </div>
                    <div className="col-12 col-md-6">
                        <img className="img-fluid" src="https://small-fri-academy.s3.us-west-1.amazonaws.com/Nutrition-Table.png" alt="Nutrition Table" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;