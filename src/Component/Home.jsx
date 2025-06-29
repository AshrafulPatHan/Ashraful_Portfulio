import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import About_me from './About_me';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';



const Home = () => {
      useEffect(() => {
        window.location.href = "https://ashraful.top";
      }, []);

    //   reload
    useEffect(() => {
        const timer = setTimeout(() => {
        window.location.reload();
        }, 10000);

        return () => clearTimeout(timer); // কম্পোনেন্ট আনমাউন্ট হলে টাইমার ক্লিয়ার করবে
    }, [])
    return (
        <div>
            <Navbar/>
            <Hero/>
            <About_me/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;