import * as React from 'react';
import portrait from './img.jpeg';
import './Home.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {

    useEffect(() => {

    })

    return (
        <div id='home_page' className="Home">
            <div className="home-wrapper">
                <div className="text">
                    <h2 id='greet'>Hello</h2>
                    <h3 id='introduction'>I am Arnaud, a boy from Belgium with a passion for computers.</h3>
                </div>

                <img className="portrait" alt='This is a photo of Arnaud, taken in Brussels.' src={portrait}></img>

                <div className="contactme">
                    <p>Want to collaborate? <Link to="/contact">Contact me.</Link></p>
                </div>
            </div>
        </div>
    );
}