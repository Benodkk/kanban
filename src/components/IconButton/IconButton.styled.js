import styled from "styled-components";
import { devices } from "../../styles/deviceWidth";

export const StyledIconButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.main};
  border: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(0.85);
  }
  @media ${devices.tablet} {
    width: 40px;
    height: 40px;
  }
`;
export const StyledIconImage = styled.img`
  width: 30px;
  height: 30px;
  @media ${devices.tablet} {
    width: 40px;
    height: 40px;
  }
`;
