import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Heading from "../components/Heading";
import NewTask from "../components/NewTask";
import Task from "../components/Task";
import { MY_TASKS } from "../queries/task";

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
        <Task key={task.id} task={task} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0.5rem 1rem;
`;

export default Tasks;
