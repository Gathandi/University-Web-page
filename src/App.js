import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from "./Components/Hero/Hero";
import Courses from "./Components/Courses/Courses";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/campus";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/contact";
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="container">
          <Title mTitle= "What We Offer" subTitles="Our Courses" />
          <Courses />
          <About />
          <Title mTitle= "Gallery" subTitles="Campus Photos" />
          <Campus />
          <Title mTitle= "Testimonials" subTitles="What Students says" />
          <Testimonial />
          <Title mTitle= "Contact Us" subTitles="Get in Touch" />
          <Contact />
          <Footer/>

      </div>
    
    </div>
  );
}


export default App;

