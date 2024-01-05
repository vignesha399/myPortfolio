import Footer from './Footer';
import './Header.css'
import Nav from './Nav';
import { Skills } from './Skill';
import {Summary, Author, SiteDiv } from './Summary';



function Mainpage() {
    return (
        <>
            <Summary />
            <hr/>
            <Nav />
            <Author />
            <hr/>
            <SiteDiv />
            <hr/>
            <Skills />
            <hr/>
            <Footer />
        </>
    )
}

export default Mainpage;
