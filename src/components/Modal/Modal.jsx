import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, ImgModal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ imageUrl, tags, handleBackdropClick }) => {
  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ImgModal>
        <img src={imageUrl} alt={tags} />
      </ImgModal>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Modal;
