import { StyledButton } from 'components/Button/Button.styled';

const Button = ({ onClick, disabled }) => {
  return (
    <StyledButton type="button" onClick={onClick} disabled={disabled}>
      Load more
    </StyledButton>
  );
};

export default Button;
