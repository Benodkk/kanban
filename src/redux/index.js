import { createStore } from "redux";
import columns from "../database/columns";

const initialState = {
  tasks: [],
};

function addToList(id, taskState, taskInfo) {
  return {
    type: "ADD_TO_LIST",
    id: id,
    taskState: taskState,
    taskInfo: taskInfo,
  };
}

function nextState(id) {
  return {
    type: "NEXT_STATE",
    id: id,
  };
}

function deleteTask(id) {
  return {
    type: "DELETE_TASK",
    id: id,
  };
}

export { addToList, nextState, deleteTask };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: action.id,
            taskState: action.taskState,
            taskInfo: action.taskInfo,
          },
        ],
      };
    case "NEXT_STATE":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id && task.taskState.id < columns.length
            ? {
                ...task,
                taskState:
                  columns[
                    columns.findIndex(
                      (column) => column.id === task.taskState.id
                    ) + 1
                  ],
              }
            : task
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
