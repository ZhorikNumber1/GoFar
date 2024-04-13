import React from 'react';
import './step.scss';
import Vector from "./../../images/Vector.png"

const Step = ({ number, icon, title }) => (
    <div className="step">
        {/* Фоновое изображение Vector теперь будем отображать прямо в структуре компонента */}
        <img src={Vector} alt="Vector Background" className="vector-background" />

        {/* Отобразим иконку внутри обертки для центрирования */}
        <div className="step-icon-wrapper">
            <img className="step-icon" src={icon} alt="Step Icon" />
        </div>

        {/* Номер шага */}
        <div className="step-number">{number}</div>

        {/* Заголовок/описание шага */}
        <div className="step-title">{title}</div>
    </div>
);

export default Step;

