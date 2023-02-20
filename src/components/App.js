import AddTask from "./AddTask/AddTask";
import { StyledApp } from "./App.styled";
import Kanban from "./Kanban/Kanban";

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
