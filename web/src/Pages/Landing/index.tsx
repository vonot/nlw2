import React from 'react';
import './styles.css';

//Images Import
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

//Icons Imports
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

export default function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt=""/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="Plataforma de Estudos." className="hero-image"/>

                <div className="buttons-container">
                    <a href="#" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </a>

                    <a href="#" className="give-classes">
                        <img src={giveClassesIcon} alt="Ensinar"/>
                        Dar aulas
                    </a>
                </div>
                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração Roxo"/>
                </span>
            </div>
        </div>
    )
}