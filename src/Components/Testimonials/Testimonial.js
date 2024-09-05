import './Testimonial.css';
import React, { useRef } from 'react';
import nextIcon from '../../Assets/next-icon.png';
import backIcon from '../../Assets/back-icon.png';
import user1 from '../../Assets/user-1.png';
import user2 from '../../Assets/user-2.png';
import user3 from '../../Assets/user-3.png';
import user4 from '../../Assets/user-4.png';

const Testimonial = () => {
    const slider = useRef();
    let tx = 0;
    const slideForward =()=> {
        if(tx > -50) {
            tx =-25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward =()=> {
        if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)` 
         
    }


    return (
    <div className='testimonial'>
        <img src={nextIcon} className='next-btn' onClick={slideForward} alt="" />
        <img src={backIcon} className='back-btn' onClick={slideBackward} alt="" />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt="" />
                            <div>
                                <h3>Jerry Sam</h3>
                                <span>SEKU, Kitui</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus molestiae laudantium quas. Ratione dolore ducimus tempore velit labore. Veniam magni ea, quae at soluta voluptatem maiores dolorem similique sint!</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user2} alt="" />
                            <div>
                                <h3>Kim Pam</h3>
                                <span>SEKU, Nairobi</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus molestiae laudantium quas. Ratione dolore ducimus tempore velit labore. Veniam magni ea, quae at soluta voluptatem maiores dolorem similique sint!</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user3} alt="" />
                            <div>
                                <h3>Blupp Simm</h3>
                                <span>SEKU, Machakos</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus molestiae laudantium quas. Ratione dolore ducimus tempore velit labore. Veniam magni ea, quae at soluta voluptatem maiores dolorem similique sint!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user4} alt="" />
                            <div>
                                <h3>Ann Sam</h3>
                                <span>SEKU, Kitui</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus molestiae laudantium quas. Ratione dolore ducimus tempore velit labore. Veniam magni ea, quae at soluta voluptatem maiores dolorem similique sint!</p>
                    </div>
                </li>
            </ul>

        </div>
    </div>    
    )

}

export default Testimonial;