import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 25px;
  width: 1200px;
  padding: 20px;
  border-radius: 20px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.colors.second};
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${(props) => props.theme.colors.main};
`;
