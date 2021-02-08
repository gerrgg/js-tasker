import React, { useState } from "react";
import styled from "styled-components";
import { FormControl } from "../components/Form";

import { TOGGLE_COMPLETE } from "../queries/task";
import { useMutation } from "@apollo/client";

const Task = ({ task }) => {
  const [complete, setComplete] = useState(task.complete);

  const [toggleComplete] = useMutation(TOGGLE_COMPLETE, {
    onError: (error) => {
      console.log(error);
    },
  });

  const handleChange = (status) => {
    console.log(task.id, status);
    setComplete(status);
    toggleComplete({ variables: { id: task.id, complete: status } });
  };

  return (
    <TaskWrapper>
      <ActionWrapper>
        <Complete
          type="checkbox"
          checked={complete}
          onChange={() => handleChange(!complete)}
        />
      </ActionWrapper>
      <Content complete={complete}>{task.content}</Content>
    </TaskWrapper>
  );
};

const TaskWrapper = styled(FormControl)`
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: center;
  font-weight: 400;
  cursor: pointer;
`;

const ActionWrapper = styled.div`
  padding: 0 0.5rem;
  color: var(--color-primary);
`;

const Complete = styled.input`
  height: 24px;
  width: 24px;
`;

const Content = styled.p`
  text-decoration: ${(props) => (props.complete ? "line-through" : "none")};
  color: ${(props) => (props.complete ? "#c1c1c1" : "#fff")};
`;

export default Task;
