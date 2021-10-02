
import React, { useState, useEffect } from 'react';
import Spinner from '../Loader/Loader';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import api from '../services/api-services';

const KEY = '22516164-f116a0b1efd134847fc29d1d4';

function FetchAPI({ searchValue }) {
    const [images, setImages] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    
    const [loading, setLoading] = useState(false);
    const [empty, setEmpty] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!searchValue || pageNum !== 1) {
            return;
        }
        
        setLoading(true);
        setEmpty(false);
          
        api.fetchAPI(searchValue, pageNum, KEY)
            .then(imgsArr => {
                if (imgsArr.length <= 0) {
                    setImages(null);
                    setEmpty(true);
                    return;

                } else {
                    setImages(imgsArr)
                }
            })
            .catch(error => setError(error))
            .finally(setLoading(false));
}, [pageNum, searchValue]);

    useEffect(() => {
        if (pageNum === 1) {
            return;
        }

        setLoading(true);
       setEmpty(false);

        api.fetchAPI(searchValue, pageNum, KEY)
            .then(imgsArr => {
                if (imgsArr.length <= 0) {
                    setImages([]);
                   setEmpty(true);
                    return;
                } else {
                    setImages(prevState => [...prevState, ...imgsArr]);
                    return;
                }
            })
            .catch(error => setError(error))
            .finally(() => {
                setLoading(false);
            
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            })

    }, [pageNum, searchValue]);

        
    const onLoadMoreButtonClick = () => {
        setPageNum(prevState => prevState + 1);
    }

        return (
            <>
            { error && <h1>{error.message}</h1> }
            { empty && <div style={{marginLeft: '15px'}}>{`Sorry, we cant find anything about ${searchValue}`}</div> }
            { loading && <Spinner /> }
            { images && !empty && (<ImageGallery images={images} />) }
            { images && images.length > 0 && !empty && (<Button onClick={onLoadMoreButtonClick} />) }
            </>         
  );
}

export default FetchAPI;