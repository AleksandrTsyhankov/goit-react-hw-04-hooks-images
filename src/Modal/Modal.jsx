import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root')


function Modal({ onClose, url }) {

    useEffect(() => {
        
        window.addEventListener('keydown', handleKeydown);

        return () => {window.removeEventListener('keydown', handleKeydown);}
    });

    function handleKeydown(e) {
            if (e.keyCode === 27) {
            return onClose();
            }
    }

    const handleBackdropClick = (e) => {
        const { target, currentTarget } = e;

        if (target === currentTarget) {
            return onClose();
        }
    }

        return createPortal(
            <div className={s.Overlay} onClick={handleBackdropClick}>
                <div className={s.Modal}>
                    <img src={url} alt="" />
                </div>
            </div>,
            modalRoot
        )
}


export default Modal;