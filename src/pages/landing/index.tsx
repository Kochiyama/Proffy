import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import lanfingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy Logo"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img 
          src={lanfingImg} 
          alt="landing" 
          className="hero-image"
        />

        <div className="button-container">
          <a href="#" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </a>

          <a href="#" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas"/>
            Dar aulas
          </a>
        </div>

        <span className="total-connections">
          total de 200 conexões já realizadas 
          <img src={purpleHeartIcon} alt="Coração Roxo"/>
        </span>
      </div>
    </div>
  );
}

export default Landing;