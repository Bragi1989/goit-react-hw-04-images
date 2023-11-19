import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  const handleClick = () => {
    onClick(image.largeImageURL);
  };

  return (
    <div className={css.galleryItem} onClick={handleClick}>
      <img className={css.imgList} src={image.webformatURL} alt="" />
    </div>
  );
};

export default ImageGalleryItem;