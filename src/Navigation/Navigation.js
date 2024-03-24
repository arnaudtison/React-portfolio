import './Navbar.css';
import * as React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import { useEffect, useState } from 'react';


export const Navigation = () => {

    const [topPosition, setTopPosition] = useState(-35);

    useEffect(() => {
        /* MENU OPEN AND CLOSING */


        const open_menu = document.getElementById('menu_btn_open');

        open_menu.onclick = () => {
            if (topPosition === -35)
                setTopPosition(prevPosition => prevPosition + 35);
        }

        document.getElementById('menu_btn_close').onclick = closeMenu;
        document.getElementById('home').onclick = closeMenu;
        document.getElementById('about').onclick = closeMenu;
        document.getElementById('work').onclick = closeMenu;

        function closeMenu() {
            if (topPosition === 0)
                setTopPosition(prevPosition => prevPosition - 35)
        }


    })

    return (
        <div className='content-wrapper'> {/* NOT USED IN CSS, PURELY SO THE DROPDOWN MENU IS POSSIBLE  */}
            <div className="nav-wrapper">
                <div className="left">
                    
                    <h1 className='title'>
                        arnaudtison.
                    </h1>
                </div>
                <div className='right'>
                    <p id='menu_btn_open' className='menu'>
                        menu
                    </p>
                </div>
            </div>
            <div id='menu' className='menu-wrapper' style={{ top: `${topPosition}%`}}>
                <p id='menu_btn_close' className='close'>
                    close
                </p>
                    <ul>
                        <Link id='home' to="/">Home</Link>
                        <Link id='about' to="/about">About</Link>
                        <Link id='work' to="/work">Work</Link>
                    </ul>

                    <Helmet>
                        <script src='./Menu.js' type='text/babel'></script>
                    </Helmet>
                </div>
        </div>
    );
}

export default Navigation