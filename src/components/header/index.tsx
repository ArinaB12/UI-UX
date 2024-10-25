import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';


export const Header = () => {
    const navigate = useNavigate();

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <button onClick={() => navigate('/')}>Главная</button>
                    </li>
                    
                    <li className={styles.navItem}>
                        <button onClick={() => navigate('/about')}>О нас</button>
                    </li>
                    
                    <li className="basket">
                        <a href="*">
                            <img src="src/pictures/korzina.png" alt="" />
                        </a>
                    </li>

                    <ul className="numder">
                        <div className="phoneimg">
                            <img src="src/pictures/telephone.png" alt="" />
                        </div>
                        <a className={styles.num} href='*'>+915-544-XX-XX</a>
                        <div className="phonetext">Все вопросы вы можете <br /> уточнить здесь</div>
                    </ul>
                </ul>
                <div className='name'>BuhArinka</div>
            </nav>
        </header>
    );
};