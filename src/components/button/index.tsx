import React from 'react';
import styles from './button.module.css';

interface ButtonProps 
{
    label: string;
    onClick: () => void;
    color?: 'blue' | 'red';
    size?: 'small' | 'large';
}

const Button = ({ label, onClick, color, size }: ButtonProps) => 
{
    return (
        <button
            className={`${styles.btn} ${styles[`btn-${color}`]} ${styles[`btn-${size}`]}`}
            onClick={onClick}
            >
            {label}
        </button>
    );
};

export default Button;