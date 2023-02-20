import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import columns from "../../database/columns";
import OneColumn from "../OneColumn/OneColumn";
import { StyledKanban } from "./Kanban.styled";
import TaskInfo from "../TaskInfo/TaskInfo";

const Kanban = () => {
  const store = useSelector((state) => state);
  const [allColumns, setAllColumns] = useState([]);
  const [visible, setVisible] = useState(false);
  const [module, setModule] = useState([]);

  useEffect(() => {
    const newColumns = columns.map((column) => {
      return {
        ...column,
        tasks: [],
      };
    });
    store.tasks.forEach((task) => {
      const properColumn = allColumns.findIndex(
        (column) => column.id === task.taskState.id
      );
      newColumns[properColumn].tasks.push(task);
    });
    setAllColumns(newColumns);
  }, [store]);

  return (
    <StyledKanban>
      <TaskInfo visible={visible} setVisible={setVisible} module={module} />
      {allColumns.map((column) => {
        return (
          <OneColumn
            column={column}
            setVisible={setVisible}
            setModule={setModule}
          />
        );
      })}
    </StyledKanban>
  );
};

export default Kanban;
