// Hero.jsx
import React from 'react';
import myImage from '../assets/pic.jpg'

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-900">
     <div className="flex items-start sspace-x-6">
        <div className="flex items-center flex-col mr-7">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Naresh 👋 </h1>
          <p className="text-xl md:text-2xl mb-6">Web developer </p>
        </div>
  
        <div className="h-32 w-32 ">
          <img src={myImage} alt="Profile-pic" className="w-full h-full object-cover border-2 rounded-full " />
        </div>
    </div>

    </section>
  );
}

export default Hero;