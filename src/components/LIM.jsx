import React, { useEffect } from 'react';
import './LIM.css';

const LIM = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.L').classList.add('L-animation');
      document.querySelector('.I').classList.add('I-animation');
      document.querySelector('.M').classList.add('M-animation');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="lim-container">
      {/* L Shape */}
      <div className="letter L">
        <div className="L-line vertical"></div>
        <div className="L-line horizontal"></div>
        <div className="L-line-horizontal-1"></div>
      </div>

      {/* I Shape */}
      <div className="letter I">
        <div className="I-line horizontal1"></div>
        <div className="I-line vertical"></div>
        <div className="I-line horizontal2"></div>
      </div>

      {/* M Shape */}
      <div className="letter M">
        {/* Inverted U left */}
        <div className="M-line-inverted-U-left"></div>
        {/* Vertical U */}
        <div className="M-line-vertical-U"></div>
        {/* Inverted U right */}
        <div className="M-line-inverted-U-right"></div>

        {/* Continuing U Shapes */}
        {/* U1 */}
        <div className="M-line-vertical-U-1"></div>
        {/* U2 */}
        <div className="M-line-inverted-U-1"></div>
        {/* U3 */}
        <div className="M-line-vertical-U-2"></div>
        {/* U4 */}
        <div className="M-line-inverted-U-2"></div>
        {/* U5 */}
        <div className="M-line-vertical-U-3"></div>
        {/* U6 */}
        <div className="M-line-inverted-U-3"></div>
        <div className="M-line-vertical-U-4"></div>
        {/* U2 */}
        <div className="M-line-inverted-U-4"></div>
        {/* U3 */}
        <div className="M-line-vertical-U-5"></div>
        {/* U4 */}
        <div className="M-line-inverted-U-5"></div>
        {/* U5 */}
        <div className="M-line-vertical-U-6"></div>
        {/* U6 */}
        <div className="M-line-inverted-U-6"></div>
  
      </div>
    </div>
  );
};

export default LIM;
