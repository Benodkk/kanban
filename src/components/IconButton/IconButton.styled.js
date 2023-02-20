import styled from "styled-components";

export const StyledIconButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.main};
  border: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(0.85);
  }
`;
export const StyledIconImage = styled.img`
  width: 40px;
  height: 40px;
`;
