import { useState } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';



function Searchbar({ onSubmit }) {
    const [searchValue, setsearchValue] = useState('');

    const clearState = () => {
        return setsearchValue('')
    }
    
    const handleInputChange = e => {
        const { value } = e.currentTarget;

        setsearchValue(value)
    }
    
    const handleSubmit = e => {
        e.preventDefault();

        if (searchValue === '') {
            return toast('Введите Ваш запрос!');
        }

        onSubmit(searchValue);
        clearState();
    }

        return (
            <header className={s.Searchbar}>
                <form className={s.SearchForm} onSubmit={handleSubmit}>
                    <button type="submit" className={s.SearchFormButton}>
                    <span className={s.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                    className={s.SearchFormInput}
                    name="searchValue"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={handleInputChange}
                    value={searchValue}
                    />
                </form>
            </header>
        );
    }

export default Searchbar;