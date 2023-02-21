import React from "react";

import AddTask from "./AddTask/AddTask";
import Kanban from "./Kanban/Kanban";

import { StyledApp } from "./App.styled";

const App = () => {
  return (
    <StyledApp>
      <h1>Task schedule</h1>
      <AddTask />
      <Kanban />
    </StyledApp>
  );
};

export default App;
