import React from 'react';
import { useState } from "react";
import './Quastions.scss';

function QuestionItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="question_item" onClick={() => setIsOpen(!isOpen)}>
            <div className="question_toggle">
                <span>{title}</span>
                <button>{isOpen ? '-' : '+'}</button>
            </div>
            <div className="question_content" style={{ maxHeight: isOpen ? '200px' : '0' }}>
                {children}
            </div>
        </div>
    );
}

export default function Questions() {
    return (
        <div className="container_questions">
            <div className="questions_section">
                <h2>Остались вопросы?</h2>
                <QuestionItem title="Вопрос 1">Ответ на вопрос 1...</QuestionItem>
                <QuestionItem title="Вопрос 2">Ответ на вопрос 2...</QuestionItem>
            </div>
            <div className="telegram_section">
                <p>Задайте свой вопрос<br/>в открытом телеграм чате GoFar</p>
                <button>Перейти</button>
            </div>
        </div>
    );
}
