import styles from './facts.module.css';
import React, { useState } from 'react';
import  Button  from '../components/button/index.tsx';


const Cat: React.FC = () => {
    const [fact, setFact] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchCatFact = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://catfact.ninja/fact');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setFact(data.fact);
        } catch (err) {
            setError('Ошибка при получении факта о коте');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className={styles.text}>
                <p>Наша пекарня хочет насытить наших клиентов не только физически, но и духовно, в связи с чем хотим предложить вам узнать что-то новое о наших идейных вдохновителях (и подтянуть английский)!<br />Достаточно просто нажать кнопку.</p>
            </div>
            <div className={styles.line}>
                <div className={styles.Musy}>
                    <img src="src/pictures/facts/f2.png"/>
                </div>
                <div className={styles.rect}>
                    <Button
                            label="Получить факт"
                            onClick={fetchCatFact}
                            color="blue"
                            size="medium"
                        />
                    <div className={styles.sqr}>
                        {loading && <p>Загрузка...</p>}
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {fact && <p>{fact}</p>}
                    </div>
                </div>
                <div className={styles.Busy}>
                    <img src="src/pictures/facts/f1.png"/>
                </div>
            </div>
        </div>
    );
};


export default Cat;
