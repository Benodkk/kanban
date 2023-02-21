import styled from "styled-components";
import { devices } from "../styles/deviceWidth";

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.main};
  min-height: 100vh;
  padding: 20px 10px;
  @media ${devices.desktop} {
    padding: 20px 0;
  }
`;
