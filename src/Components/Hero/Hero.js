import React from "react";
import './Hero.css';
import darkArrow from '../../Assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className="hero container">
            <div className="hero-text">
                <h1>We ensure education for a better world</h1>
                <p>Our cutting-edge curriculum is designed to empower students with knowledge, skills, and expriences
                    needed to excel in the dynamic field of education.
                </p>
                <button className="btn">Explore more <img src={darkArrow} alt="kk"/></button>
            </div>

        </div>
    )
}

export default Hero