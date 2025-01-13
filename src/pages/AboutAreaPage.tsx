import React from 'react';
import '../pages.css';

const AboutUs: React.FC = () => {
    return (
        <div>
            <h1 className="title">About Area</h1>
            <p className="description">
                Pet проект, созданный для курсовых...
            </p>
            <h2 className="subTitle">Задача Area</h2>
            <p className="description">
                Задача Area – проверить, что работает.
            </p>
            <h2 className="subTitle">Ценность Area</h2>
            <ul className="list">
                <li>Интерфейс</li>
                <li>Работает</li>
                <li>Типо инновации</li>
            </ul>
        </div>
    );
};

export default AboutUs;