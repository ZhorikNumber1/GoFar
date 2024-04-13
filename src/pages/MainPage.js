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
import like_shapes from './../images/like-shapes.png'
import micro from './../images/microphone.png'
import teacher from './../images/teacher.png'
import tuck from './../images/tick-circle.png'
import tesksqare from './../images/task-square.png'
import Step from "../components/Step/Step";
import Tariffs from "../components/Tariffs/Tariffs"
import Risks from "../components/Risks/Risks";
import Countries from "../components/Countries/Countries";
import Feedback from "../components/FeedBack/Feedback"
import Quastions from "../components/Quastions/Quastions";
import Consa from "../components/Consa/Consa";
import Politics from "../components/Politics/Politics";

const MainPage = () => {
    return (
        <div className={style.container}>
            <Navbar/>
            <div className={style.header_div}>
                <div className={style.header_container}>
                    <div className={style.interactive_container}>
                        <img src={union} alt="Интерактивный Фон"/>
                        <div className={`${style.interactive_content} ${style.slideInFromLeft}`}>
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
                    <div className={style.card}><img src={money} className={style.card_img}/>Возможность по расчету
                    </div>
                    <div className={style.card}><img src={profile} className={style.card_img}/>Без ограничений по
                        возрасту
                    </div>
                    <div className={style.card}><img src={book} className={style.card_img}/>Обучение на английском</div>
                    <div className={style.card}><img src={massage} className={style.card_img}/>Консультация экспертов
                        GoFar
                    </div>
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
                            <h1>Ты - студент<strong> передумал учиться на родине</strong></h1>
                        </div>
                    </div>
                    <div className={style.with_inline}>
                        <div className={style.card_helpfull_parents}>
                            <h1>Ты - <strong> родитель </strong>
                                и выбираешь <strong>ВУЗ для ребёнка</strong></h1>
                        </div>
                        <div className={style.card_helpfull_maga}>
                            <h1>Ты хочешь<strong> поступить на магистратуру</strong>
                            </h1>
                        </div>
                        <div className={style.card_helpfull_anketa}>
                            <h1>
                                <strong>Заполните анкету </strong>
                                и узнайте, сможете ли вы
                                <strong> поступить
                                    в зарубежный вуз
                                </strong>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.advantages_cards}>
                <div className={style.advantages}>
                    <div className={style.label_adv}>
                        <h1><strong>Приемущества </strong>работы с GoFar</h1>
                        <button>Узнать больше</button>
                    </div>
                    <div className={style.advantages_list}>
                        <div className={style.advantage_item}>
                            <div className={style.icon}><img src={tuck}></img></div>
                            <h2><strong> Гарантия поступления </strong>в вуз, прописанная в договоре</h2>
                        </div>
                        <div className={style.advantage_item}>
                            <div className={style.icon}><img src={like_shapes}></img></div>
                            <h2>Кураторы прокачивают за границей и имеют <strong>доказаннй опыт помощи </strong>с
                                поступлением</h2>
                        </div>
                        <div className={style.advantage_item}>
                            <div className={style.icon}><img src={micro}></img></div>
                            <h2>Свободно <strong> говорим на государственном языке</strong> страны, куда поступают
                                студенты</h2>
                        </div>
                        <div className={style.advantage_item}>
                            <div className={style.icon}><img src={teacher}></img></div>
                            <h2>Проводим за руку от идеи поступления<strong> до личной помощи </strong>в стране</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div>

                    </div>
                    <div className={style.stepsContainer}>
                        <Step number="01" icon={tesksqare} title="Подбор учебных программ"/>
                        <Step number="02" icon="📄" title="Оформление мотивационных писем и CV"/>
                        <Step number="03" icon="🛂" title="Оформление визы под ключ"/>
                        <Step number="04" icon="🛂" title="Поиск и аренда жилья под ключ"/>
                    </div>
                    <div className={style.stepsContainer}>
                        <Step number="01" icon="1" title="Подбор учебных программ"/>
                        <Step number="02" icon="📄" title="Оформление мотивационных писем и CV"/>
                        <Step number="03" icon="🛂" title="Оформление визы под ключ"/>
                        <Step number="04" icon="🛂" title="Поиск и аренда жилья под ключ"/>
                    </div>
                </div>
                <Risks></Risks>
                <div>
                    <Countries></Countries>
                </div>

                <div>
                    <Tariffs></Tariffs>
                </div>

                <div>
                    <div>Наша
                        команда
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div>
                    <div>
                        <Feedback></Feedback>
                    </div>
                    <div>

                    </div>
                </div>

                <div>
                    Куда
                    поступают
                    наши клиенты
                </div>

                <div>
                    <Quastions></Quastions>
                </div>

                <div>
                    <Consa></Consa>
                </div>

                <div>
                    Остались вопросы?
                </div>
                <div>
                    Приглашаем
                    на бесплатную консультацию!
                </div>
                <div>
                    Мы много
                    рассказываем
                    о поступлении тут:
                </div>
                <div>
                    <Navbar></Navbar>
                </div>
                <div>
                    <Politics></Politics>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
