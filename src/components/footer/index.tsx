import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './footer.module.css';


export const Footer = () => {
    const navigate = useNavigate();

    
      return (
        <footer>
              <div className={styles.about}>
                  <h3>BuhArinka~</h3>
                  <p>Cайт пекарни БухАринка~ был создан исключительно в учебных целях и не несёт в себе угрозы (наверное)! При возникновении недопониманий/каких-либо претензий, пожалуйтста, не спешите подавать или писать на нас жалобы, доносы, предъвы, а также обращения в суд и прокуратуру, просто позвоните нам (и мы не возьмём трубку)! Давайте учиться вместе, а жить дружно!</p>
              </div>  
              <div className={styles.submenu}>
              <ul className={styles.navList}>
                  <li className={styles.navItem}>
                      <button onClick={() => navigate('/')}>Главная</button>
                  </li>
                  
                  <li className={styles.navItem}>
                      <button onClick={() => navigate('/about')}>О нас</button>
                  </li>
              </ul>
                  <div className={styles.number}>
                      <p>Наши контакты</p>
                      <a className={styles.num} href='*'>+915-544-XX-XX</a>
                  </div>
              </div>
       </footer>
    );
};