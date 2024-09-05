import './Courses.css';
import React from 'react';
import program1 from '../../Assets/program-1.png';
import program2 from '../../Assets/program-2.png';
import program3 from '../../Assets/program-3.png';
import programIcon1 from '../../Assets/program-icon-1.png';
import programIcon2 from '../../Assets/program-icon-2.png';
import programIcon3 from '../../Assets/program-icon-3.png';




const Courses = () => {
    return (
        <div className='courses'>
            <div className="course"> 
                <img src={program1} alt='prog1'/>
                <div className="caption">
                    <img src={programIcon1} alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="course">
                <img src={program2} alt='prog1'/>
                <div className="caption">
                    <img src={programIcon2} alt="" />
                    <p>Masters Degree</p>
                </div>
            </div>
            <div className="course">
                <img src={program3} alt='prog1'/>
                <div className="caption">
                    <img src={programIcon3} alt="" />
                    <p>Post Graduate Degree</p>
                </div>
            </div>
        
        </div>
    ) 
}


export default Courses;