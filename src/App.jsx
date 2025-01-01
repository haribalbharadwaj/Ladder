import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RevolvingBox from './components/RevolvingBox.jsx';
import FoldingBoxes from './components/FoldingBoxes.jsx';
import LIM from './components/LIM.jsx';
import Home from './components/Home.jsx';
import ImageStack from './components/ImageStack.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home route */}
          <Route path="/revolving-box" element={<RevolvingBox />} />  {/* Revolving Box route */}
          <Route path="/folding-boxes" element={<FoldingBoxes />} />  {/* Folding Boxes route */}
          <Route path="/lim" element={<LIM/>}/>
          <Route path="/image-stack" element={<ImageStack/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
