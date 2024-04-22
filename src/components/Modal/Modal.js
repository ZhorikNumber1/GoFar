import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Modal.scss';

const Modal = ({ isOpen, handleClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        languageOfStudy: '',
        countryOfStudy: '',
        educationLevel: '',
        telegram: '',
        phone: ''
    });

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) handleClose();
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [handleClose]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const BOT_TOKEN = '6895590833:AAHhFmtxaTCZqz4vz57WOKhTdgIFFCvEaVo';
        const USER_ID = '632867689';
        const message = `Новая заявка от ${formData.name} (${formData.telegram}, ${formData.phone}, Учится: ${formData.countryOfStudy}, Язык обучения: ${formData.languageOfStudy}, Уровень образования: ${formData.educationLevel})`;

        try {
            await axios.get(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${encodeURIComponent(message)}`);
            handleClose();
            alert('Заявка успешно отправлена!');
        } catch (error) {
            console.error('Ошибка при отправке сообщения:', error);
            alert('Ошибка при отправке сообщения. Попробуйте позже!');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div className="modal-container" onClick={e => e.stopPropagation()}>
                <button onClick={handleClose} className="close-button">×</button>
                <div className="modal-info">
                    <div className="modal-margin">
                    <p>Хотите учиться за границей?</p>
                    <h1>Приглашаем
                        на бесплатную консультацию!</h1>
                    <p>
                        расскажем о поступлении, стипендиях, требованиях, дедлайнах
                        оценим ваши шансы
                        расскажем о стоимости поступления, переезда и проживания
                        составим индивидуальный план поступления
                        ответим на ваши вопросы
                    </p>
                    <div className="div_zoom">
                        Консультация проходит в Zoom
                        и длится 30 минут
                    </div>
                    </div>
                </div>

                <div className="modal-content">
                    <form onSubmit={handleSubmit} className="modal-form">
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Ваше имя" className="modal-input" />
                        <input type="text" name="languageOfStudy" value={formData.languageOfStudy} onChange={handleInputChange} placeholder="Язык обучения" className="modal-input" />
                        <select name="countryOfStudy" value={formData.countryOfStudy} onChange={handleInputChange} className="modal-select">
                            <option value="">Выберите страну</option>
                            <option value="Австрия">Австрия</option>
                            <option value="Германия">Германия</option>
                            <option value="Италия">Италия</option>
                        </select>
                        <select name="educationLevel" value={formData.educationLevel} onChange={handleInputChange} className="modal-select">
                            <option value="">Уровень образования</option>
                            <option value="9-11 класс школы">9-11 класс школы</option>
                            <option value="Другое">Другое</option>
                        </select>
                        <input type="text" name="telegram" value={formData.telegram} onChange={handleInputChange} placeholder="Telegram" className="modal-input" />
                        <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Телефон" className="modal-input" />
                        <button type="submit" className="modal-submit-button">Отправить заявку</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Modal;