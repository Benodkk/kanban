import { createStore } from "redux";
import columns from "../database/columns";

const STORAGE_KEY = "my_app_state";

const savedState = localStorage.getItem(STORAGE_KEY);
const initialState = savedState
  ? JSON.parse(savedState)
  : {
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
    case "ADD_TO_LIST": {
      const newState1 = {
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
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState1));
      return newState1;
    }
    case "NEXT_STATE": {
      const newState2 = {
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
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState2));
      return newState2;
    }
    case "DELETE_TASK": {
      let newState3 = {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState3));
      return newState3;
    }
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
