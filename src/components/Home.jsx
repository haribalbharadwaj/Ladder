import React from 'react';
import { Link } from 'react-router-dom';  

function Home() {
  return (
    <div className="home-page"  style={{top:'200px',left:'600px',position:'absolute'}}>
    <h1>Welcome to the Interactive Page</h1>
    <div className="navigation-buttons">
      <Link to="/revolving-box">
        <button className="nav-button">Go to Revolving Box</button>
      </Link>
      <Link to="/folding-boxes">
        <button className="nav-button">Go to Folding Boxes</button>
      </Link>
      <Link to="/lim">
        <button className="nav-button">Go to LIM</button>
      </Link>
      <Link to="/image-stack">
        <button className="nav-button">Go to Imaage Stack</button>
      </Link>
    </div>
  </div>
  );
}

export default Home;
