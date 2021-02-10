import React, { useState } from "react";
import styled from "styled-components";
import { TextField, FormControl } from "../components/Form";

import { ADD_TASK, MY_TASKS } from "../queries/task";
import { useMutation } from "@apollo/client";

const NewTask = () => {
  const [task, setTask] = useState("");
  const [hasFocus, setHasFocus] = useState(false);

  const [addTask] = useMutation(ADD_TASK, {
    onError: (error) => {
      console.log(error);
    },
    refetchQueries: [{ query: MY_TASKS }],
  });

  const handleBlur = (content) => {
    if (content.length > 0) {
      addTask({
        variables: { content },
      });
    }
    setTask("");
    setHasFocus(false);
  };

  /**
   * Submit task on enter if the input has focus and the enter key is clicked
   * @param String code
   * @param Node target
   */
  const handleKeyDown = (code, target) => {
    if (hasFocus && code === "Enter") {
      handleBlur(target.value);
    }
  };

  return (
    <TaskWrapper>
      <TaskField
        onFocus={() => setHasFocus(true)}
        onBlur={({ target }) => handleBlur(target.value)}
        onKeyDown={({ code, target }) => handleKeyDown(code, target)}
        onChange={({ target }) => setTask(target.value)}
        value={task}
        placeholder="Add a task"
      />
    </TaskWrapper>
  );
};

const TaskWrapper = styled(FormControl)`
  border: 1px solid #fff;
  background-color: #fff;
  display: flex;
  align-items: center;
  margin-left: -15px;
  margin-right: -15px;
  padding: 0 1rem;
  margin-bottom: 1.5rem;
`;

const TaskField = styled(TextField)`
  background-color: transparent;
  padding: 0.25rem 0 0.5rem;
  color: #333;
  margin: 0.5rem 0;
  font-size: 1.25rem;
  ::placeholder {
    padding: 0 0.5rem;
    color: var(--color-primary-dark);
    opacity: 1;
  }
`;

export default NewTask;
