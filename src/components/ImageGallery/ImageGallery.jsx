import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryList>
      {images.map(item => {
        return (
          <ImageGalleryItem
            key={item.id}
            id={item.id}
            imageUrl={item.webformatURL}
            alt={item.tags}
            largeImageURL={item.largeImageURL}
          />
        );
      })}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default ImageGallery;
