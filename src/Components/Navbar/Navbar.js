import React, { useEffect, useState } from "react";
import './Navbar.css';
import logo from '../../Assets/logo.jpg';
import { Link } from "react-scroll";
import menuIcon from '../../Assets/menu-icon.png';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
        }, []);

        const [mobileMenu, setMobileMenu] = useState(false);
        const toggleMenu = () => {
            mobileMenu ? setMobileMenu(false) : setMobileMenu(true); 
        }

    return (
        <nav className={`container ${sticky ? 'darko-nav' : ''}`}>
            <img src={logo}  className="logo" alt="nn"/>
            <ul className={mobileMenu?"":'hide-mobile-menu'}>
                <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to="course" smooth={true} offset={-260} duration={500}>Courses</Link></li>
                <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
                <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to="testimonial" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn">Contact us</Link></li>
            </ul>
            <img src={menuIcon} alt="" className="menu-icon" onClick={toggleMenu}/>
        </nav>
    )
}

export default Navbar