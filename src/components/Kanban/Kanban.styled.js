import styled from "styled-components";
import { devices } from "../../styles/deviceWidth";

export const StyledKanban = styled.section`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media ${devices.desktop} {
    width: 1200px;
    display: grid;
    row-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
  }
`;
