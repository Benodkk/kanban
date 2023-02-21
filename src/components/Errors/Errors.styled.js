import styled from "styled-components";

export const StyledErrorContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  row-gap: 10px;
  position: absolute;
  bottom: -10px;
  left: 10%;
  width: 80%;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.error};
  transition: 0.5s;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

export const StyledCloseBtn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  font-size: 2.5rem;
  border: none;
  justify-self: flex-end;
  cursor: pointer;
`;

export const StyledError = styled.div`
  grid-column: 1/3;
`;
