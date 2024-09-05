import './About.css';
import React  from  'react';
import aboutimg from '../../Assets/about.png';
import playicon from '../../Assets/play-icon.png';

const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={aboutimg} alt="" className='about-img' />
                <img src={playicon} alt='' className='play-icon' />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>From Arid to Green</h2>
                <p>
                South Eastern Kenya University (SEKU) is a public university located in Kitui County, Kenya. Established in 2008, it is committed to providing quality education and fostering research in various fields, including science, technology, and agriculture. SEKU offers a wide range of undergraduate and postgraduate programs aimed at empowering students with practical skills and knowledge to meet the demands of the modern workforce. The university also emphasizes community engagement and environmental sustainability, making it a key institution for development in Kenya's southeastern region.</p>
            </div>

        </div>
    )
}


export default About