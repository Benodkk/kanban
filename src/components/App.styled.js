import styled from "styled-components";

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.main};
  min-height: 100vh;
  padding-top: 20px;
`;
