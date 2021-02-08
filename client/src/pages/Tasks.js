import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Heading from "../components/Heading";
import NewTask from "../components/NewTask";
import { MY_TASKS } from "../queries/task";
import { FormControl } from "../components/Form";

const Tasks = () => {
  const result = useQuery(MY_TASKS);

  const tasks = result.loading ? [] : result.data.myTasks;

  return (
    <Wrapper>
      <Heading level={2} primary>
        👍 My Tasks 👍
      </Heading>
      <NewTask />
      {tasks.map((task) => (
        <Task task={task} />
      ))}
    </Wrapper>
  );
};

const Task = ({ task }) => {
  return (
    <TaskWrapper>
      <ActionWrapper>
        <input type="checkbox" style={{ width: 24, height: 24 }} />
      </ActionWrapper>
      {task.content}
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

const Wrapper = styled.div`
  padding: 0.5rem 1rem;
`;

export default Tasks;
