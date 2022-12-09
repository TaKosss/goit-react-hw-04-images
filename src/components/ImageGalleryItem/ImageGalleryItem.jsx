import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import { useState, useEffect } from 'react';

import { ImageGalleryCard, ImageGalleryImg } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ imageUrl, alt, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else window.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) closeModal();
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <ImageGalleryCard>
      <ImageGalleryImg src={imageUrl} alt={alt} onClick={openModal} />
      {isModalOpen && (
        <Modal
          handleBackdropClick={handleBackdropClick}
          imageUrl={largeImageURL}
          alt={alt}
        />
      )}
    </ImageGalleryCard>
  );
};

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
