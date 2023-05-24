import { StyledButton } from 'components/Button/Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onClick, disabled }) => {
  return (
      <StyledButton type="button" onClick={onClick} disabled={disabled}>
        Load more
      </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};