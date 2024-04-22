import React from 'react';
import './step.scss';
import Vector from "./../../images/Vector.png"

const Step = ({ number, icon, title }) => (
    <div className="step">
        <img src={Vector} alt="Vector Background" className="vector-background" />
        <div className="step-icon-wrapper">
            <img className="step-icon" src={icon} alt="Step Icon" />
        </div>
        <div className="step-number">{number}</div>
        <div className="step-title">{title}</div>
        <div className="step-connecting-line"></div> {/* Элемент для линии */}
    </div>
);


export default Step;

