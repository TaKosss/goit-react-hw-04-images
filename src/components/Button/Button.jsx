import PropTypes from 'prop-types';
import { LoadMoreButton, Wrapper } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <Wrapper>
      <LoadMoreButton type="button" onClick={onClick}>
        Load more
      </LoadMoreButton>
    </Wrapper>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
