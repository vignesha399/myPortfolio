/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import './Nav.css';

import crossMark from './../crossMark.png'
import arrow_back from '../arrow_back.png';
import menu from '../menu.png';
import Style from './Header.module.css';

export default function Nav() {

    const dropdownMenu = useRef();
    const menuDiv = useRef();
    const horizontalNavBar = useRef();
    const contactme = useRef();
    const details = useRef();


    const NavDivOpen = () => {
        menuDiv.current.style.left = '0px';
    }
    const NavDivClose = () => {
        menuDiv.current.style.left = '-500px';
    }


    let expandProject = () => {
        dropdownMenu.current.style.display = 'contents'
        dropdownMenu.current.style.bgcolor = 'green'
    }
    let collapseProject = () => {
        dropdownMenu.current.style.display = 'none'
    }
    useEffect(
        _ => {
            contactme.current.style.display = 'none';
            dropdownMenu.current.style.display = 'none';
            details.current.style.display = "none";
        }, [])
    const ContactMe = () => {
        // eslint-disable-next-line eqeqeq
        if (contactme.current.style.display.toString() == 'none') {
            contactme.current.style.display = 'flex';
            details.current.style.display = "flex";
        } else {
            contactme.current.style.display = 'none';
            details.current.style.display = "none";
        }
    }

    return (
        <>
            <span><img id='navMenu' src={menu} onClick={NavDivOpen} alt='menuImg' /></span>
            <div ref={horizontalNavBar} className={"horizontalNavBar"}>
                <div className='hdiv'>
                    <ul className="nav" onMouseOver={expandProject} onMouseOut={collapseProject}>
                        <li className="project" onMouseOver={expandProject} onMouseOut={collapseProject}>Projects</li>
                        <li className="dropdown">
                            <ul ref={dropdownMenu} className="dropdown-menu" onMouseOver={expandProject} onMouseOut={collapseProject}>
                                <li><a className="dropdown-item" href="https://vignesha399.github.io/Analog_Clock/">Analog clock</a></li>
                                <li><a className="dropdown-item" href="https://vignesha399.github.io/Simple_Site/">Simple site</a></li>
                                <li><a className="dropdown-item" href="https://vignesha399.github.io/GroceryList/">Grocery List</a></li>
                                <hr className="dropdown-divider" />
                                <li><a className="dropdown-item" href="https://github.com/vignesha399">Github link</a></li>
                            </ul>
                        </li>
                    </ul>
                    <p className="contact" onClick={ContactMe} ><a href="#contactme"> Contact Me </a></p>
                </div>
            </div>

            <div onClick={ContactMe} ref={contactme} className="details">
                <div className={"crossMarkDiv"}>
                    <img src={crossMark} className={"crossMark"} alt="crossmarkimage" />
                </div>
            </div>

            <div ref={details} className="detailDiv">
                <p className="detail1 detail"><label htmlFor="tel">Call : <a href='tel:9629600648' id="tel"> 9629600648</a></label> </p>
                <p className="detail2 detail">Mail : <a href='mailto:vigneshvky399@gmail.com'>vigneshvky399@gmail.com</a></p>
            </div>

            <div ref={menuDiv} className={Style.navDiv} >
                <nav style={{ width: '100%' }}>
                    <h3>Nav Bar </h3>
                    <span id='navMenuClose'><img src={arrow_back} onClick={NavDivClose} alt='arrow_back' /></span>
                    <br />
                    <hr />
                    <ul className="vUl">
                        <li className="navLI"><a href='#summaryDiv'>Home</a></li>
                        <li className="navLI"><a href='#authorDiv' onClick={ContactMe}>Contact</a></li>
                        <li className="navLI"><a href='#siteDiv'>Projects</a></li>
                        <li className="navLI"><a href='#skillsDiv'>Skills</a></li>
                        {/* <li className="navLI"><a href='#expDiv'>Experience</a></li> */}
                        <br />
                        <p className="education">
                            <p>Education:</p>
                            <ul>
                                <li> Bachelor of engineering</li>
                                <li> CGPA : 7.5 </li>
                                <li></li>
                            </ul>
                            
                        </p>
                    </ul>
                </nav>
            </div>
        </>
    )
}