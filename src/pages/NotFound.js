import React from 'react';
import './NotFound.scss';
import Navbar from '../components/NavBar/Navbar';
import NotFoundPicture from "./../images/NotFoundPicture.png"

export default function NotFound() {
    return (
        <div className="mainNofFoundContainer">
            <div>
                <Navbar/>
            </div>
        <div className="notFoundContainer">

            <div className="content">
                <h1>Страница не найдена</h1>
                <button onClick={() => window.location.href = '/'}>На главную</button>
                <img src={NotFoundPicture} alt="Sad Earth"/>
                {/* ANIMATION CONTAINER */}
                <div className="rainAnimation"></div>
            </div>
        </div>
        </div>
    );
}
