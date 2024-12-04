import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';


export const Header = () => {
    const navigate = useNavigate();

    return (
        <header className={styles.header}>
            <nav>    
                <div className={styles.submenu}>
                    <div className={styles.basket}>
                        <a href="*">
                            <img src="src/pictures/korzina.png" alt="" />
                        </a>
                    </div>
                    <div className={styles.phoneimg}>
                        <img src="src/pictures/telephone.png" alt="" />
                    </div>
                    <div className={styles.number}>
                        <a className={styles.num} href='*'>+915-544-XX-XX</a>
                        <div className={styles.phonetext}>Все вопросы вы можете <br /> уточнить здесь</div>
                    </div>
                </div>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <button onClick={() => navigate('/')}>Главная</button>
                    </li>
                    
                    <li className={styles.navItem}>
                        <button onClick={() => navigate('/about')}>О нас</button>
                    </li>
                </ul>
                <h3 className={styles.name}>BuhArinka~</h3>
            </nav>
        </header>
    );
};