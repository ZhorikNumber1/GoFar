import React, { useState, useEffect } from 'react';
import style from './CountryInfo.module.scss';

const countries = [
    { name: "Австрия", imageUrl: "path_to_austria_image", infoUrl: "url_to_austria_page" },
    { name: "Германия", imageUrl: "path_to_germany_image", infoUrl: "url_to_germany_page" },
    { name: "Франция", imageUrl: "path_to_france_image", infoUrl: "url_to_france_page" },
];

function CountryInfo() {
    const [currentCountry, setCurrentCountry] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentCountry((prevCountry) => (prevCountry + 1) % countries.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const { name, imageUrl, infoUrl } = countries[currentCountry];

    const onNext = () => {
        setCurrentCountry((currentCountry + 1) % countries.length);
    };

    const onPrevious = () => {
        setCurrentCountry((currentCountry - 1 + countries.length) % countries.length);
    };

    return (
        <div className={style.second_div}>
            <img src={imageUrl} alt={name} />
            <div className={style.information}>
                <p className={style.text}>Помогаем поступить в вузы:</p>
                <button onClick={onNext} className={style.next}>&#8250;</button>
                <div className={style.text_about_country}>
                    <p className={style.text}>{name}</p>
                    <a href={infoUrl} className={style.button}>!</a>
                </div>
            </div>
        </div>
    );
}

export default CountryInfo;
