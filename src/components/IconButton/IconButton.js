import { StyledIconButton, StyledIconImage } from "./IconButton.styled";

const IconButton = ({ src, onClick }) => {
  return (
    <StyledIconButton onClick={() => onClick()}>
      <StyledIconImage src={src} />
    </StyledIconButton>
  );
};

export default IconButton;
