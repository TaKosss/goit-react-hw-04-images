import Searchbar from 'components/Searchbar';
import Button from 'components/Button';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
import ErrorMessege from 'components/ErrorMessege';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from './App.styled';
import { fetchImage } from 'services/fetchImage';

const App = () => {
  const [imageQuery, setImageQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!imageQuery) {
      return;
    }

    const findImages = async () => {
      try {
        setIsLoading(true);

        const photos = await fetchImage(imageQuery, pageNumber);
        photos.hits.length === 0
          ? Notify.failure('Sorry')
          : setImages(images => [...images, ...photos.hits]);
      } catch (error) {
        setError(error.ErrorMessege);
      } finally {
        setIsLoading(false);
      }
    };

    findImages();
  }, [imageQuery, pageNumber]);

  const handleSearchbarSubmit = value => {
    if (value !== imageQuery) {
      setImageQuery(value);
      setPageNumber(1);
      setImages([]);
    }
  };

  const onLoadMoreClick = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  };

  return (
    <>
      <Box>
        <Searchbar onSubmit={handleSearchbarSubmit} />
        {images && <ImageGallery images={images} />}
        {isLoading && <Loader />}
        {images.length % 12 === 0 && images.length !== 0 ? (
          <Button onClick={onLoadMoreClick} />
        ) : (
          ''
        )}

        {error && <ErrorMessege />}
        <ToastContainer autoClose={3000} />
      </Box>
    </>
  );
};

export default App;
