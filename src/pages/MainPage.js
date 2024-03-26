import React from 'react';
import Navbar from './../components/NavBar/Navbar'; // Проверьте путь импорта
import style from "./MainPage.module.scss";
import union from "./../images/Union.png"

const MainPage = () => {
    return (
        <div className={style.container}>
            <Navbar/>
            <div className={style.header_div}>
                <div className={style.header_container}>
                    <div className={style.interactive_container}>
                        <img src={union} alt="Интерактивный Фон"/>
                        <div className={style.interactive_content}>
                            <h1>Поможем <strong>поступить</strong> в вуз мечты <strong>за границей</strong></h1>
                            <div className={style.buttons}>
                                <button className={style.btn_submit_app}>Оставить заявку</button>
                                <button className={style.btn_more_info}>Больше о GoFar</button>
                            </div>
                        </div>


                    </div>
                    <div className={style.second_div}>
                        <img src="путь_к_изображению" alt="Описание изображения"/>
                        <div className={style.information}>
                            <p className={style.text}>Помогаем поступить в вузы:</p>
                            <a href="#" className={style.next}>&#8250;</a>                            <p
                            className={style.text}>Австрия</p>
                            <button className={style.button}>123</button>
                        </div>
                    </div>
                </div>
                <div className={style.cards_container}>
                    <div className={style.card}>Бесплатное обучение</div>
                    <div className={style.card}>Возможность по расчету</div>
                    <div className={style.card}>Без ограничений по возрасту</div>
                    <div className={style.card}>Обучение на английском</div>
                    <div className={style.card}>Консультация экспертов GoFar</div>
                    <div className={style.card}>Планове сопровождание</div>
                </div>
            </div>
            <div className={style.workin_with}>
                <div>
                    С кем мы работаем
                </div>
                <div className={style.with_gap}>
                    <div className={style.with_inline}>
                        <div className={style.bakalavr}>
                            1
                        </div>
                        <div className={style.student}>
                            2
                        </div>
                    </div>
                    <div className={style.with_inline}>
                        <div className={style.card_helpfull}>3</div>
                        <div className={style.card_helpfull}>4</div>
                        <div className={style.card_helpfull}>5</div>
                    </div>
                </div>
            </div>

            <div className={style.advantages_cards}>
                <div className={style.advantages}></div>
                <div className={style.stage}></div>
                <div className={style.risks}></div>
            </div>

            <div>
                локация
            </div>

            <div>
                prises
            </div>

            <div>
                comrads
            </div>

            <div>
                resipients
            </div>

            <div>
                kyda posrypayt
            </div>

            <div>
                quastions
            </div>

            <div>
                konsa
            </div>

            <div>
                contacts
            </div>
        </div>
    );
};

export default MainPage;
