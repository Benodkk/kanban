import styled from "styled-components";

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.second};
`;

export const StyledNoTaskInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.main};
`;

export const StyledTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.main};
`;

export const StyledTask = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.colors.secondFont};
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5px;
`;
