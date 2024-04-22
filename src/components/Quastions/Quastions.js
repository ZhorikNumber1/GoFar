import { useState, useRef, useEffect } from 'react';
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import "./Quastions.scss"

function QuestionItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [ref, entry] = useIntersectionObserver({
        threshold: 0,
    });

    const inView = entry?.isIntersecting; // Состояние видимости элемента
    const hasEnteredView = useRef(false); // Сохраняем факт пересечения

    useEffect(() => {
        if (inView) {
            hasEnteredView.current = false; // Элемент пересёк область видимости хотя бы раз
        }
    }, [inView]);

    return (
        <div ref={ref} className={`question_item ${hasEnteredView.current ? 'animate' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="question_toggle" style={{
                background: isOpen ? '#2D2D2D' : '#131313',
            }}>
                <span>{title}</span>
                <button>{isOpen ? 'x' : '+'}</button>
            </div>
            <div className="question_content" style={{
                maxHeight: isOpen ? '200px' : '0',
                padding: isOpen ? '10px 20px' : '0',
                transition: 'all 0.3s ease-in-out',
            }}>
                {children}
            </div>
        </div>
    );
}

export default function Questions() {
    return (
        <div>
            <div className="question_text">
                <h1>Остались <strong>вопросы?</strong></h1>
            </div>
            <div className="container_questions">
                <div className="questions_section">
                    <QuestionItem title="Вопрос 1">Ответ на вопрос 1...</QuestionItem>
                    <QuestionItem title="Вопрос 2">Ответ на вопрос 2...</QuestionItem>
                    <QuestionItem title="Вопрос 3">Ответ на вопрос 3...</QuestionItem>
                    <QuestionItem title="Вопрос 4">Ответ на вопрос 4...</QuestionItem>
                    <QuestionItem title="Вопрос 5">Ответ на вопрос 5...</QuestionItem>
                </div>
                <div className="telegram_section">
                    <p>Задайте свой вопрос<br/>в открытом телеграм чате GoFar</p>
                    <button>Перейти</button>
                </div>
            </div>
        </div>
    );
}
