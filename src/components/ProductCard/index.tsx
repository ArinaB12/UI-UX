import React from 'react';
import styles from './productCard.module.css';


interface productCardProps {
    title: string;
    price: number;
    image: string;
}

const ProductCard = ({ title, price, image }: productCardProps) => {
     return (
     <div className={styles.productCard}>
        <img src={image} alt={title} className={styles.productImage} />
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.productPrice}>{price} ₽</p>
     </div>
     );
    };
    
export default ProductCard;