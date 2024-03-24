import * as React from 'react';
import aboutpicture from './about1.JPG';
import './About.css';

function About() {
    return (
        <div className="About">
            <div className="center-wrapper-about">
                <div className="content-wrapper-about">
                    <div className="inner-wrapper-about">
                        <div className="text-about">
                            <h2> Who am I?</h2>
                        </div>

                        <img className="aboutpicture" src={aboutpicture} />
                        <p className="information">
                            My name is Arnaud Tison and I live in Belgium. I have been programming since I was about 13 years old, now 18.
                            It all started when my brother started following IT in college and I tought it looked pretty interesting. I started watching tutorials on youtube about HTML5 and CSS3 and a little bit of Javascript. Well, and the is history.
                        </p>
                        <p className="information">
                            I'm currently in my first year of university, following the same path as my brother: Industrial ICT. I have learned quit a bit since my first line of code. HTML5 and CSS3 are the languages I refer to when developing web pages. I'm currently also learning Java.
                        </p>
                        <p className="information">
                            This portfolio was made using React JS. Because of this I am not only making a helpful element for future occasions but also using it as a practice to sharpen my knowledge of React.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;