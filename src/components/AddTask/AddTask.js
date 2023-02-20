import React, { useState } from "react";
import { useDispatch } from "react-redux";
import columns from "../../database/columns";
import fields from "../../database/fields";
import { addToList } from "../../redux";
import uniqid from "uniqid";
import { StyledForm, StyledInputContainer } from "./AddTask.styled";

const AddTask = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState(fields);
  const [textareaValue, setTextareaValue] = useState("");
  const [columnValue, setColumnValue] = useState(columns[0].id);
  const [errorsInfo, setErrorsInfo] = useState([]);

  const handleInputChange = (event, index) => {
    const value = event.target.value;
    const newInputs = [...inputs];
    newInputs[index] = { ...newInputs[index], value };
    setInputs(newInputs);
  };

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setColumnValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = [];
    const id = uniqid();
    const taskState = columns.find(
      (column) => column.id === Number(columnValue)
    );
    const taskInfo = inputs.map((input) => {
      if (input.value.length === 0) {
        errors.push(input.error);
      } else {
        return { label: input.label, value: input.value, important: true };
      }
    });
    taskInfo.push({
      label: "Description",
      value: textareaValue,
      important: false,
    });
    if (errors.length === 0) {
      dispatch(addToList(id, taskState, taskInfo));
    } else {
      setErrorsInfo(errors);
    }
  };

  return (
    <section>
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        {inputs.map((field, index) => {
          return (
            <StyledInputContainer key={field.name}>
              <label htmlFor={field.name}>{field.label}</label>
              <input
                name={field.name}
                value={field.value}
                type={field.type}
                onChange={(event) => handleInputChange(event, index)}
              />
            </StyledInputContainer>
          );
        })}
        <StyledInputContainer>
          <label htmlFor="taskDescription">Short description</label>
          <textarea
            name="taskDescription"
            value={textareaValue}
            onChange={handleTextareaChange}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <label htmlFor="column">Task state</label>
          <select
            name="column"
            value={columnValue}
            onChange={handleSelectChange}
          >
            {columns.map((column) => {
              return (
                <option key={column.id} value={column.id}>
                  {column.name}
                </option>
              );
            })}
          </select>
        </StyledInputContainer>

        <input value="Submit" type="submit" />
      </StyledForm>
    </section>
  );
};

export default AddTask;
