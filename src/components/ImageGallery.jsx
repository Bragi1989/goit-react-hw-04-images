import React from 'react';
import ImageGalleryItem from './ImageGalleryItem.jsx';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick, visibleCount }) => {
  const slicedImages = images.slice(0, visibleCount);

  return (
    <div className={css.gallery}>
      {slicedImages.map((image) => (
        <ImageGalleryItem key={image.id} image={image} onClick={onImageClick} />
      ))}
    </div>
  );
};

export default ImageGallery;