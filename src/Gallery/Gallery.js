import * as React from 'react';
import './Gallery.css';

import photo1 from './images/photo1.JPG';
import photo2 from './images/photo2.JPG';
import photo3 from './images/photo3.JPG';
import photo4 from './images/photo4.JPG';
import photo5 from './images/photo5.JPG';
import photo6 from './images/photo6.JPG';
import photo7 from './images/photo7.JPG';
import photo8 from './images/photo8.JPG';
import photo9 from './images/photo9.JPG';
import photo10 from './images/photo10.JPG';
import photo11 from './images/photo11.JPG';
import photo12 from './images/photo12.JPG';

const Work = () => {
    return (
        <div className="gallery">
            <div className="center-wrapper-gallery">
                <div className="content-wrapper-gallery">
                    <div className="inner-wrapper-gallery">
                        <div className="text-gallery">
                            <h2>In my free time.</h2>
                            <p className="description">
                                When I visit places, I always bring my camera so I can capture the moment.
                            </p>
                        </div>

                        <div className="photos">
                            <div className="firstrow">
                                    <img className="photo1" src={photo1}></img>

                                    <img className="photo5" src={photo5}></img>

                                    <img className="photo2" src={photo2}></img>

                            </div>
                            <div className="secondrow">
                                <img className="photo8" src={photo8}></img>

                                <img className="photo3" src={photo3}></img>

                                <img className="photo6" src={photo6}></img>

                            </div>

                            <div className="thirdrow">
                                <img className="photo4" src={photo4}></img>

                                <img className="photo7" src={photo7}></img>

                                <img className="photo11" src={photo11}></img>

                            </div>

                            <div className="fourthrow">
                                <img className="photo10" src={photo10}></img>

                                <img className="photo9" src={photo9}></img>

                                <img className="photo12" src={photo12}></img>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;