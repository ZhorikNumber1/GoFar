import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Navbar.module.scss';
import icons from './../../images/icon.png'

const Navbar = () => {
    return (
        <nav className={`${styles.navbar} ${styles.slideInFromUp}`}>`
            <div className={styles["navbar-brand"]}>
                <div className={styles.icon}>
                    <Link to="/"><img src={icons} alt="Logo"/></Link>
                </div>
            </div>
            <ul className={styles["navbar-nav"]}>
                <li><Link to="/features">Преимущества</Link></li>
                <li><Link to="/services">Услуги</Link></li>
                <li><Link to="/countries">Страны</Link></li>
                <li><Link to="/about">О нас</Link></li>
                <li><Link to="/reviews">Отзывы</Link></li>
            </ul>
            <div className={styles.div_buttons}>
                <button className={styles.button_school}>Языковая школа</button>
                <button className={styles.button_cons}>Бесплатная консультация</button>
            </div>
        </nav>
    );
};

export default Navbar;
