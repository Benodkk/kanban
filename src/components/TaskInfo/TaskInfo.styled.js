import styled from "styled-components";

export const StyledTaskInfoContainer = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  z-index: 1;
  transition: 0.4s;
  &::before {
    content: " ";
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    opacity: 0.5;
    background-color: ${(props) => props.theme.colors.second};
    z-index: -1;
  }
`;

export const StyledTaskInfoo = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-items: flex-end;
  width: 300px;
  gap: 10px;
  padding: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.main};
`;

export const StyledTask = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  grid-column: 1/3;
  justify-self: flex-start;
  &:nth-child(2) {
    order: -1;
    grid-column: 1/2;
  }
`;

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.colors.secondFont};
`;
