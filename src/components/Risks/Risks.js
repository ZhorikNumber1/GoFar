import React from 'react';
import './risks.scss'; // Убедитесь, что вы создали соответствующий CSS файл

function Risks() {
    return (
        <div className="container">
            <div className="header">
                <div>
                    <h1>Берем на себя все риски</h1>
                </div>
                <div>
                    <button className="request-button">Оставить заявку</button>
                </div>
            </div>
            <div className="items-container">
                <div className="item" style={{flexBasis: '60%'}}>
                    <h2>Поздние сроки и опоздания</h2>
                    <p>Текст с информацией...</p>
                </div>
                <div className="item" style={{flexBasis: '30%'}}>
                    <h2>Неправильное оформление документов</h2>
                    <p>Текст с информацией...</p>
                </div>
                <div className="item" style={{flexBasis: '30%'}}>
                    <h2>Возможность отказа в визе и ВНЖ</h2>
                    <p>Текст с информацией...</p>
                </div>
                <div className="item" style={{flexBasis: '60%'}}>
                    <h2>Проблемы с пропиской жилья</h2>
                    <p>Текст с информацией...</p>
                </div>
            </div>
        </div>
    );
}

export default Risks;
