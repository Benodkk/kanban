import React from "react";

import {
  StyledCloseBtn,
  StyledError,
  StyledErrorContainer,
} from "./Errors.styled";

const Errors = ({ errors, showErrors, setShowErrors }) => {
  return (
    <StyledErrorContainer visible={showErrors}>
      <h3>Errors:</h3>
      <StyledCloseBtn onClick={() => setShowErrors(false)}>X</StyledCloseBtn>
      {errors.map((error) => {
        return <StyledError key={error}>{error}</StyledError>;
      })}
    </StyledErrorContainer>
  );
};

export default Errors;
