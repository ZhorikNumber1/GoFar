import React from 'react';
import Navbar from './../components/NavBar/Navbar'; // Проверьте путь импорта
import style from "./MainPage.module.scss";
import union from "./../images/Union.png"

const MainPage = () => {
    return (
        <div className={style.container}>
            <Navbar/>
            <div className={style.header_container}>
                <div className={style.interactive_container}>
                    <img src={union} alt="Интерактивный Фон"/>
                    <div className={style.interactive_content}>
                        <h1>Поможем <strong>поступить</strong> в вуз мечты <strong>за границей</strong></h1>
                    </div>


                </div>
                <div>
                123
                </div>
            </div>
        </div>
    );
};

export default MainPage;
