import React, { useState, useEffect } from 'react';
import './FoldingBoxes.css';

const FoldingBoxes = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = window.innerHeight; // Height of each section
      const totalSections = 3;

      // Calculate which section should be active based on scroll position
      const newSection = Math.min(Math.floor(scrollY / sectionHeight), totalSections - 1);

      if (newSection !== currentSection) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentSection(newSection);
          setIsTransitioning(false);
        }, 500); // Delay to allow animation
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);

  return (
    <div className="folding-boxes-container">
      <div className={`folding-box ${currentSection === 0 ? 'active' : 'inactive'} ${isTransitioning ? 'transitioning' : ''}`}>

      <div className="box-header-c">
  <h2>Creation</h2>
  <hr />
  <div className="text-container">
    <div style={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
      <span className="numbers" style={{fontSize:'200px'}}>1</span>
      <span>Vous avez une idée ? Nous avons la méthode.</span>
    </div>
    <span>
      Il existe mille et une façons de faire un podcast. Nous vous aidons à trouver la vôtre.
      Grâce à l’expertise éditoriale et technique de notre équipe, nous vous aidons à choisir
      le meilleur format sonore pour votre projet : celui qui répondra à vos objectifs, à vos
      envies, et qui fera briller votre message.
    </span>
  </div>
</div>

       
      </div>

      <div className={`folding-box ${currentSection === 1 ? 'active' : 'inactive'} ${isTransitioning ? 'transitioning' : ''}`}>
        <div className="box-header-p">
          <h2>Production</h2>
          <hr />

          <div className="text-container">
            <div style={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
              <span className="numbers" style={{fontSize:'200px',color:'rgb(144 195 205 ),rgb(71 177 114/var'}}>2</span>
              <span>Vous avez une idée ? Nous avons la méthode.</span>
            </div>
            <span>
              Il existe mille et une façons de faire un podcast. Nous vous aidons à trouver la vôtre.
              Grâce à l’expertise éditoriale et technique de notre équipe, nous vous aidons à choisir
              le meilleur format sonore pour votre projet : celui qui répondra à vos objectifs, à vos
              envies, et qui fera briller votre message.
            </span>
          </div>
        </div>
      </div>

      <div className={`folding-box ${currentSection === 2 ? 'active' : 'inactive'} ${isTransitioning ? 'transitioning' : ''}`}>
        <div className="box-header-d">
          <h2>Diffusion</h2>

          <hr />

          <div className="text-container">
            <div style={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
              <span className="numbers" style={{fontSize:'200px',color:'rgb(71 177 114)'}}>3</span>
              <span>Vous avez une idée ? Nous avons la méthode.</span>
            </div>
            <span>
              Il existe mille et une façons de faire un podcast. Nous vous aidons à trouver la vôtre.
              Grâce à l’expertise éditoriale et technique de notre équipe, nous vous aidons à choisir
              le meilleur format sonore pour votre projet : celui qui répondra à vos objectifs, à vos
              envies, et qui fera briller votre message.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoldingBoxes;
