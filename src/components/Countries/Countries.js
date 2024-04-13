import React from 'react';
import './Countries.scss';

const Countries = () => (
    <div className="container_couintries">
        <h2>Куда поступают наши клиенты</h2>
        <div className="cards">
            <div className="card">
                <img src="austria.jpg" alt="Австрия">
                </img>
                <p>Австрия</p>
            </div>
            <div className="card">
                <img src="germany.jpg" alt="Германия">
                </img>
                <p>Германия</p>
            </div>
            <div className="card">
                <img src="italy.jpg" alt="Италия">
                </img>
                <p>Италия</p>
            </div>
            <div className="card more">
                <p>Скоро больше</p>
            </div>
        </div>
    </div>
);
export default Countries;