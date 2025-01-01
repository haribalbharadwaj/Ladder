import React, { useState, useEffect } from 'react';
import './ImageStack.css'; // External CSS file
import Crypture from '../assets/crypture.jpg';

const ImageStack = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [circleCount, setCircleCount] = useState(0); // Start with 0 circles
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
 

  // Track scroll position
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    // Adjust the circle count based on the scroll position, but start only after scrolling 100px
    if (position > 100) {
      const newCircleCount = Math.min(5, Math.floor((position - 100) / 200) + 1); // Ensure at least 1 circle
      setCircleCount(newCircleCount);
    } else {
      setCircleCount(0); // No circles before 100px of scrolling
    }
  };

   // Track mouse movement
   const handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    setCursorPosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
 


  return (
    <div className="container">
      <div className="image-stack">
        <img
          src={Crypture}
          alt="Top Image"
          className="image top-image"
          style={{ transform: `rotate(30deg) translateY(${scrollPosition * 0.1}px) translateX(${scrollPosition * 0.05}px)` }} // Add movement
        />
        <img
          src={Crypture}
          alt="Middle Image"
          className="image middle-image"
          style={{ transform: `rotate(0deg) translateY(${scrollPosition * 0.08}px) translateX(-${scrollPosition * 0.05}px)` }} // Add movement
        />
        <img
          src={Crypture}
          alt="Bottom Image"
          className="image bottom-image"
          style={{ transform: `rotate(30deg) translateY(${scrollPosition * 0.06}px)` }} // Add movement
        />
      </div>

      <div className="circle-container">
        {[...Array(circleCount)].map((_, index) => (
          <div
            key={index}
            className="circle"
            style={{
              width: `${200 + index * 150}px`,  // Increase size based on index
              height: `${200 + index * 150}px`,
            }}
          ></div>
        ))}
      </div>

      {/* Cursor Shadow */}
      <div
        className="cursor-shadow"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          boxShadow: `0px 0px 50px 30px rgba(255, 255, 255, 0.6)`, // White shadow
        }}
      ></div>
    </div>
  );
};

export default ImageStack;
