import React from 'react';
import styles from './tariffs.module.scss';
function Tariffs() {
    const tariffs = [
        { id: 1, description: "Базовый", price: "100$", included: ["Сервис А", "Сервис В"], buttonLabel: "Выбрать" },
        { id: 2, description: "Продвинутый", price: "200$", included: ["Сервис А", "Сервис В", "Сервис С"], buttonLabel: "Выбрать" },
        { id: 3, description: "Премиум", price: "300$", included: ["Сервис А", "Сервис В", "Сервис С", "Сервис D"], buttonLabel: "Выбрать" },
    ];

    return (
        <div className={styles.container_tarrifs}>
            <div>
                <h1>Наши тарифы</h1>
                <p>Выберите оптимальный для вас вариант</p>
                <button>Выбор страны</button>
            </div>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Описание услуги</th>
                        {tariffs.map(tariff => (
                            <th key={tariff.id}>{tariff.description}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Цена</td>
                        {tariffs.map(tariff => (
                            <td key={tariff.id}>{tariff.price}</td>
                        ))}
                    </tr>
                    {["Сервис А", "Сервис В", "Сервис С", "Сервис D"].map(service => (
                        <tr key={service}>
                            <td>{service}</td>
                            {tariffs.map(tariff => (
                                <td key={tariff.id}>{tariff.included.includes(service) ? "Да" : "Нет"}</td>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <td>Заявка</td>
                        {tariffs.map(tariff => (
                            <td key={tariff.id}><button>{tariff.buttonLabel}</button></td>
                        ))}
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Tariffs;
