import styled from "styled-components";
import { devices } from "../../styles/deviceWidth";

export const StyledAddTaskSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.second};
  gap: 10px;
  margin-top: 20px;
  @media ${devices.desktop} {
    width: 1200px;
    gap: 20px;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  @media ${devices.desktop} {
    display: grid;
    row-gap: 10px;
    grid-template-columns: repeat(5, 1fr);
    gap: 25px;
  }
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${(props) => props.theme.colors.main};
`;

export const StyledSubmitBtn = styled.input`
  align-self: center;
  width: 120px;
  grid-column: 1/6;
  cursor: pointer;
  transition: 0.3s;
  background-color: white;
  &:hover {
    background-color: ${(props) => props.theme.colors.font};
    transform: translateY(3px);
  }
  @media ${devices.desktop} {
    justify-self: flex-end;
  }
`;
