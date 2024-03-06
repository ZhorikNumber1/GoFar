import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';  // Предположим, что вы используете CSS-modules

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles["navbar-nav"]}>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/about">О нас</Link></li>
                <li><Link to="/contact">Контакты</Link></li>
            </ul>
        </nav>

    );
};

export default Navbar;