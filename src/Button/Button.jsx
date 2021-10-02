import React from 'react';
import s from './Button.module.css';

function Button({ onClick }) {
        return (
            <button
                onClick={onClick}
                className={s.Button}
                type="button"
            >
                Load more
            </button >
    
        );
}

export default Button;