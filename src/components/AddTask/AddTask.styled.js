import styled from "styled-components";

export const StyledAddTaskSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 1200px;
  padding: 20px;
  border-radius: 20px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.colors.second};
  gap: 20px;
`;

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 25px;
  input {
    height: 30px;
  }
  input,
  textarea,
  select {
    padding: 6px 4px;
    border-radius: 5px;
    border: none;
  }
  select {
    background-color: #fff;
  }
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${(props) => props.theme.colors.main};
`;

export const StyledSubmitBtn = styled.input`
  justify-self: flex-end;
  width: 120px;
  grid-column: 1/6;
  cursor: pointer;
  transition: 0.3s;
  background-color: white;
  &:hover {
    background-color: ${(props) => props.theme.colors.font};
    transform: translateY(3px);
  }
`;
