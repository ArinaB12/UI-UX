import React from 'react';
import  Button  from '../components/button/index.tsx';
import styles from './home.module.css';
import  ProductCard  from '../components/productCard/index.tsx';
import { Products } from '../components/productCard/products';
import { button } from '../components/button/button.ts';

function Home() 
{
    return (
        <div>
            <div className={styles.rect}>
                <h1>Мы рады приветствовать вас на главной странице сайта пекарни БухАринка~! <br /> Уже более 0 лет мы лелеем нашу мечту об открытии своей пекарни и более ничего не делаем! Однако теперь у нас есть сайт! <br /> Наслаждайтесь!</h1>
            </div>
            <div className={styles.line}>
                {button.map((button) => (
                    <Button
                        label={button.label}
                        onClick={() => alert('Кнопка нажата!')}
                        color="blue"
                        size="large"
                    />
                ))}
                <Button
                    label=">"
                    onClick={() => alert('Кнопка нажата!')}
                    color="blue"
                    size="small"
                    />
            </div>
            <div className={styles.food}>
                {Products.map((product) => (
                    <ProductCard
                        image={product.url}
                        price={product.price}
                        title={product.title}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;