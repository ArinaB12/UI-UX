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
                <a href="*">
                    <img src="src/pictures/Greating.png" alt="" />
                </a>
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