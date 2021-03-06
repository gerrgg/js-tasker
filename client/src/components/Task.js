import React, { useState } from "react";
import styled from "styled-components";
import { FormControl } from "../components/Form";
import { TOGGLE_COMPLETE } from "../queries/task";
import { useMutation } from "@apollo/client";
import { FaCheck } from "react-icons/fa";
import { TaskField } from "./NewTask";

const Task = ({ task, showTask }) => {
  const [complete, setComplete] = useState(task.complete);

  const [toggleComplete] = useMutation(TOGGLE_COMPLETE, {
    onError: (error) => {
      console.log(error);
    },
  });

  const handleChange = (status) => {
    setComplete(status);
    toggleComplete({ variables: { id: task.id, complete: status } });
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
      <Text complete={complete} onClick={() => showTask(task)}>
        {task.content}
      </Text>
    </Wrapper>
  );
};

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

const Text = styled.p`
  text-decoration: ${(props) => (props.complete ? "line-through" : "none")};
  color: ${(props) => (props.complete ? "#c1c1c1" : "#fff")};
  overflow: hidden;
  padding: 0 0.5rem;
  width: 100%;
`;

const EditTaskField = styled(TaskField)`
  margin: 0 1rem;
  font-weight: 800;
`;

export default Task;
