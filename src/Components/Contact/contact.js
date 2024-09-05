import React from "react";
import "./contact.css";
import msgIcon from '../../Assets/msg-icon.png';
import mailIcon from '../../Assets/mail-icon.png';
import phoneIcon from '../../Assets/phone-icon.png';
import LocationIcon from '../../Assets/location-icon.png';
import whiteArrow from '../../Assets/white-arrow.png';

const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "13f3d1ea-6a7b-40db-9f2e-52d0a94600a2");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    
    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Send us a message <img src={msgIcon} alt="" /></h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis veritatis nemo consequatur doloribus, illo libero vitae similique nisi, natus aperiam ipsam non vel numquam distinctio repudiandae necessitatibus quidem ipsum. Dolorem?</p>     
                <ul>
                    <li><img src={mailIcon} alt="" />contactus@seku.ac.ke</li>
                    <li><img src={phoneIcon} alt="" />+254705626413</li>
                    <li><img src={LocationIcon} alt="" />Kitui Machakos Road</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name="name" placeholder="" required/>
                    <label>Phone Number</label>
                    <input type="text"  name="phone" placeholder="Enter your number"/>
                    <label>Write your message here</label>
                    <textarea name="message" rows="6" placeholder="Enter your messagee" required></textarea>
                    <button type="submit" className="btn dark-btn">Submit <img src={whiteArrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>

        </div>
    )
}


export default Contact