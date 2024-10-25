import React from 'react';
import styles from './ProductCard.module.css';


interface ProductCardProps {
    title: string;
    price: number;
    imageUrl: string;
}
export const ProductCard = ({ title, price, imageUrl }: ProductCardProps) => {
    return (
        <div className={styles.productCard}>
            <img src={imageUrl} alt={title} className={styles.productImage} />
            <h3 className={styles.productTitle}>{title}</h3>
            <p className={styles.productPrice}>{price} ₽</p>
        </div>
    );
};