import React, { useState }  from 'react';
import {Link} from 'react-router-dom';
import styles from './Navbar.module.scss';
import icons from './../../images/icon.png'

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className={`${styles.navbar} ${styles.slideInFromUp}`}>
            <div className={styles["navbar-brand"]}>
                <div className={styles.icon}>
                    <Link to="/"><img src={icons} alt="Logo"/></Link>
                </div>
            </div>
            <ul className={styles["navbar-nav"]}>
                <li><Link to="/features">Преимущества</Link></li>
                <li><Link to="/services">Услуги</Link></li>
                <li className={styles.dropdown}>
                    <button className={styles.dropbtn} onClick={toggleDropdown}>
                    Страны <i className="fa fa-caret-down"></i>
                    </button>
                {dropdownOpen && (
                    <div className={`${styles.dropdownContent} ${dropdownOpen ? styles.active : ''}`}>
                            <Link to="/reviews/USA">USA</Link>
                            <Link to="/reviews/UK">UK</Link>
                            <Link to="/reviews/Canada">Canada</Link>
                    </div>
                 )}
                </li>
                <li><Link to="/about">О нас</Link></li>
                <li><Link to="/countries">Отзовы</Link></li>

            </ul>
            <div className={styles.div_buttons}>
                <Link to="/school"><button className={styles.button_school}>Языковая школа</button></Link>
                <Link to="/consultation"><button className={styles.button_cons}>Бесплатная консультация</button></Link>
            </div>
        </nav>
    );
};

export default Navbar;
