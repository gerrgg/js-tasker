import React, { useState } from "react";
import styled from "styled-components";
import { FormControl } from "./Form";

import { TOGGLE_COMPLETE } from "../queries/task";
import { FaCheck } from "react-icons/fa";
import { TaskField } from "./NewTask";
import { ADD_TASK, MY_TASKS } from "../queries/task";
import { useMutation } from "@apollo/client";

export const EditTask = ({ task }) => {
  const [complete, setComplete] = useState(task.complete);

  const handleChange = (status) => {
    setComplete(status);
    toggleComplete({ variables: { id: task.id, complete: status } });
  };

  const [toggleComplete] = useMutation(TOGGLE_COMPLETE, {
    onError: (error) => {
      console.log(error);
    },
  });

  const [content, setContent] = useState(task.content);
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
    setContent("");
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
    <Wrapper>
      <ActionWrapper>
        <input
          type="checkbox"
          checked={complete}
          onChange={() => handleChange(!complete)}
          style={{
            height: 24,
            width: 24,
            opacity: 0,
            position: "absolute",
          }}
        />
        <Circle complete={complete}>{complete ? <FaCheck /> : null}</Circle>
      </ActionWrapper>
      <EditTaskField
        value={content}
        onFocus={() => setHasFocus(true)}
        onBlur={({ target }) => handleBlur(target.value)}
        onKeyDown={({ code, target }) => handleKeyDown(code, target)}
        onChange={({ target }) => setContent(target.value)}
      />
    </Wrapper>
  );
};

export default EditTask;

const Wrapper = styled(FormControl)`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 0.9rem;
  cursor: pointer;
  position: relative;
  z-index: 1;
  padding: 0 0.5rem;
`;

const ActionWrapper = styled.div`
  color: var(--color-primary);
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  height: 24px;
  width: 24px;
  border: 1px solid
    ${(props) => (props.complete ? "var(--color-primary-dark)" : "#fff")};
  background-color: ${(props) =>
    props.complete ? "var(--color-primary-dark)" : "#fff"};
  transition: background-color 0.1s ease-in;
  color: #fff;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditTaskField = styled(TaskField)`
  margin: 0 1rem;
  font-weight: 800;
  font-size: 0.9rem;
  max-width: 50%;
  &:focus {
    border: 1px solid #333;
  }
`;
