import React from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';


const ImageGallery = ({ images }) => {
    return (
        <>
        <ul className={s.ImageGallery}>
            <ImageGalleryItem images={images}/>
        </ul>
        </>
  );
  }

export default ImageGallery;