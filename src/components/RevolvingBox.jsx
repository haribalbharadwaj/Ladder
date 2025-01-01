import React, { useEffect, useState } from 'react';
import './RevolvingBox.css';

const RevolvingBox = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentFace, setCurrentFace] = useState('front'); // Track current face

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / documentHeight;
      const rotation = scrollFraction * 360; // Full rotation based on scroll position
      setScrollPosition(rotation);

      // Determine which face is visible based on scrollPosition
      if (rotation % 360 >= 0 && rotation % 360 < 90) {
        setCurrentFace('front');
      } else if (rotation % 360 >= 90 && rotation % 360 < 180) {
        setCurrentFace('right');
      } else if (rotation % 360 >= 180 && rotation % 360 < 270) {
        setCurrentFace('back');
      } else if (rotation % 360 >= 270 && rotation % 360 < 360) {
        setCurrentFace('left');
      }

      // Handle top and bottom rotation logic
      if (rotation % 360 >= 270 && rotation % 360 < 360) {
        setCurrentFace('top');
      } else if (rotation % 360 >= 0 && rotation % 360 < 90) {
        setCurrentFace('bottom');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      {/* Background images */}
      <div className="box" style={{ transform: `rotateX(${scrollPosition}deg)` }}>
        {/* Add span with custom text on each face */}
        <div className={`face front ${currentFace === 'front' ? 'focused' : ''}`}>
          <h1>Landscape Photography</h1>
          <span>Explore the beauty of the world through our captivating landscape photography.</span>
        </div>

        <div className={`face back ${currentFace === 'back' ? 'focused' : ''}`}>
          <div style={{transform: 'rotate(180deg)'}}>
          <h1>Real Estate Photography</h1>
          <span>Highlight the best features of your property with our real estate photography services.</span>
          </div>
        </div>

        <div className={`face left ${currentFace === 'left' ? 'focused' : ''}`}>
          <span>This is the Left Face</span>
        </div>

        <div className={`face right ${currentFace === 'right' ? 'focused' : ''}`}>
          <span>This is the Right Face</span>
        </div>

        <div className={`face top ${currentFace === 'top' ? 'focused' : ''}`}>
        <div className="overlay" style={{ width: '800px', position: 'fixed', top: '0', left: '0', height: '300px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
          <div className="bottom-data">
            <h1>Documentary Photography</h1>
            <span>Documentary photography serves to inform, educate, and inspire by providing a truthful representation of the world.</span>
          </div>
        </div>

        <div className={`face bottom ${currentFace === 'bottom' ? 'focused' : ''}`}>
        <div className="overlay" style={{ width: '800px', position: 'fixed', top: '0', left: '0', height: '300px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
          <div className="bottom-data">
            <h1>Product Photography</h1>
            <span>Showcase your products with professional product photography services.</span>
          </div>
        </div>
      </div>

      {/* Dot indicator */}
      <div className="dot-indicator">
        <div className={`dot ${currentFace === 'front' ? 'active' : ''}`}></div>
        <div className={`dot ${currentFace === 'back' ? 'active' : ''}`}></div>
        <div className={`dot ${currentFace === 'top' ? 'active' : ''}`}></div>
        <div className={`dot ${currentFace === 'bottom' ? 'active' : ''}`}></div>
      </div>
    </div>
  );
};

export default RevolvingBox;
