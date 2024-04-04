import React from 'react';
import Navbar from './../components/NavBar/Navbar';
import style from "./MainPage.module.scss";
import union from "./../images/Union.png"
import award from './../images/award.png'
import book from './../images/book.png'
import massage from './../images/message-tick.png'
import money from './../images/moneys.png'
import profile from './../images/profile-tick.png'
import ticket from './../images/ticket-star.png'
import bakalavr_human from './../images/bakalavr_human.png'
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
                            <a href="#" className={style.next}>&#8250;</a>
                            <p className={style.text}>Австрия</p>
                            <button className={style.button}>123</button>
                        </div>
                    </div>
                </div>
                <div className={style.cards_container}>
                    <div className={style.card}><img src={ticket} className={style.card_img}/>Бесплатное обучение</div>
                    <div className={style.card}><img src={money} className={style.card_img}/>Возможность по расчету</div>
                    <div className={style.card}><img src={profile} className={style.card_img}/>Без ограничений по возрасту</div>
                    <div className={style.card}><img src={book} className={style.card_img}/>Обучение на английском</div>
                    <div className={style.card}><img src={massage} className={style.card_img}/>Консультация экспертов GoFar</div>
                    <div className={style.card}><img src={award} className={style.card_img}/>Планове сопровождение</div>
                </div>

            </div>
            <div className={style.workin_with}>
                <div className={style.header_text_working_with}>
                    <h1>С кем мы <strong>работаем</strong></h1>
                </div>
                <div className={style.with_gap}>
                    <div className={style.with_inline}>
                        <div className={style.bakalavr}>
                            <div className={style.bakalavr_text}>
                                <h1>Ты <strong>заканчиваешь школу / колледж
                                </strong> и хочешь <strong>поступить на бакалавриат</strong></h1>
                            </div>
                            <div className={style.bakalavr_img}>
                                <img src={bakalavr_human}></img>
                            </div>
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
