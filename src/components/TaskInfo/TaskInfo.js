import React from "react";

import cross from "../../database/icons/cross.png";

import IconButton from "../IconButton/IconButton";

import {
  StyledTaskInfoContainer,
  StyledTaskInfoo,
  StyledTask,
  StyledLabel,
} from "./TaskInfo.styled";

const TaskInfo = ({ visible, setVisible, module }) => {
  if (module.length !== 0) {
    return (
      <StyledTaskInfoContainer visible={visible}>
        <StyledTaskInfoo>
          <IconButton onClick={() => setVisible(false)} src={cross} />
          {module.map((info) => {
            return (
              <StyledTask key={info.label}>
                <StyledLabel>{info.label}:</StyledLabel>
                <div>{info.value}</div>
              </StyledTask>
            );
          })}
        </StyledTaskInfoo>
      </StyledTaskInfoContainer>
    );
  }
};

export default TaskInfo;
