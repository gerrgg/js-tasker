import React, { useState } from "react";
import styled from "styled-components";
import { TextField, FormControl } from "../components/Form";

import { FaPlus } from "react-icons/fa";
import { ADD_TASK } from "../queries/task";
import { useMutation } from "@apollo/client";

const NewTask = () => {
  const [task, setTask] = useState("");
  const [hasFocus, setHasFocus] = useState(false);

  const [addTask] = useMutation(ADD_TASK, {
    onError: (error) => {
      console.log(error);
    },
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

  return (
    <TaskWrapper>
      <ActionWrapper>
        {hasFocus ? (
          <input type="checkbox" style={{ width: 24, height: 24 }} />
        ) : (
          <FaPlus size={24} />
        )}
      </ActionWrapper>
      <TaskField
        onFocus={() => setHasFocus(true)}
        onBlur={({ target }) => handleBlur(target.value)}
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
  margin-bottom: 3rem;
`;

const ActionWrapper = styled.div`
  padding: 0 0.5rem;
  color: var(--color-primary);
  width: 40px;
`;

const TaskField = styled(TextField)`
  background-color: transparent;
  padding: 0.25rem 0 0.5rem;
  color: #333;
  margin: 0.5rem 0;
  font-size: 1.1rem;
  ::placeholder {
    color: var(--color-primary);
    opacity: 1;
  }
`;

export default NewTask;
