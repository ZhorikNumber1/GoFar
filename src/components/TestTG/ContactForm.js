import React, { useState } from "react";
import axios from "axios";
import "./TestTg.scss"
const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        telegramNick: "",
        phoneNumber: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const BOT_TOKEN = '6895590833:AAHhFmtxaTCZqz4vz57WOKhTdgIFFCvEaVo';
        const USER_ID = '632867689';
        const message = `Новая завяка от  ${formData.firstName} ${formData.lastName} (Телеграмм: ${formData.telegramNick}, Телефон: ${formData.phoneNumber})`;

        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${encodeURIComponent(message)}`;

        try {
            await axios.get(url);
            alert('Сообщение успешно отправлено!');
        } catch (error) {
            console.error('Ошибка при отправке сообщения:', error);
            alert('Ошибка при отправке сообщения.');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: "20px", maxWidth: "500px" }}>
            <div>
                <label>Имя:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            </div>
            <div>
                <label>Фамилия:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>
            <div>
                <label>Ник в Телеграм:</label>
                <input type="text" name="telegramNick" value={formData.telegramNick} onChange={handleChange} />
            </div>
            <div>
                <label>Номер телефона:</label>
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </div>
            <button type="submit">Отправить</button>
        </form>
    );
};

export default ContactForm;
