import { StyledTaskInfo } from "./TaskInfo.styled";

const TaskInfo = ({ visible, setVisible, module }) => {
  if (module.length !== 0) {
    return (
      <StyledTaskInfo visible={visible} onClick={() => setVisible(false)}>
        asd
        <div>{module[0].label}</div>
      </StyledTaskInfo>
    );
  }
};

export default TaskInfo;
