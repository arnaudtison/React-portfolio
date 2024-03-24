import * as React from 'react';
import './Work.css';

const Work = () => {
    return (
        <div className="Work">
            <div className="center-wrapper-work">
                <div className="content-wrapper-work">
                    <div className="inner-wrapper-work">
                        <div className="text-work">
                            <h2>What I've done.</h2>
                            <p className="description">
                                Here you can look at a few things I have made over the years.
                            </p>
                        </div>

                        <div className="photos">
                            <div className="firstrow">
                                <div className="img1">
                                    <p>Image 1</p>
                                </div>
                                <div className="img2">
                                    <p>Image 2</p>
                                </div>
                                <div className="img3">
                                    <p>Image 3</p>
                                </div>
                            </div>
                            <div className="secondrow">
                                <div className="img4">
                                    <p>Image 4</p>
                                </div>
                                <div className="img5">
                                    <p>Image 5</p>
                                </div>
                                <div className="img6">
                                    <p>Image 6</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;