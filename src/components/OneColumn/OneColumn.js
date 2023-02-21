import IconButton from "../IconButton/IconButton";
import {
  StyledButtonsContainer,
  StyledColumn,
  StyledLabel,
  StyledTask,
  StyledTaskContainer,
} from "./OneColumn.styled";
import trash from "../../database/icons/trash.png";
import checkbox from "../../database/icons/checkbox.png";
import info from "../../database/icons/info.png";
import { useDispatch } from "react-redux";
import { deleteTask, nextState } from "../../redux";

const OneColumn = ({ column, setVisible, setModule }) => {
  const dispatch = useDispatch();

  return (
    <StyledColumn>
      <h3>{column.name}</h3>
      {column.tasks.map((task) => {
        return (
          <StyledTaskContainer>
            {task.taskInfo.map((info) => {
              return info.important ? (
                <StyledTask>
                  <StyledLabel>{info.label}:</StyledLabel>
                  <div>{info.value}</div>
                </StyledTask>
              ) : (
                <></>
              );
            })}
            <StyledButtonsContainer>
              <IconButton
                src={trash}
                onClick={() => dispatch(deleteTask(task.id))}
              />
              <IconButton
                src={info}
                onClick={() => {
                  setVisible(true);
                  setModule(task.taskInfo);
                }}
              />
              <IconButton
                src={checkbox}
                onClick={() => dispatch(nextState(task.id))}
              />
            </StyledButtonsContainer>
          </StyledTaskContainer>
        );
      })}
    </StyledColumn>
  );
};

export default OneColumn;
