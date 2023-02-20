import styled from "styled-components";

export const StyledTaskInfo = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;
