import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Heading from "../components/Heading";
import NewTask from "../components/NewTask";
import Task from "../components/Task";
import { MY_TASKS } from "../queries/task";
import Collapse from "../components/Collapse";

const Tasks = () => {
  const result = useQuery(MY_TASKS);

  const tasks = result.loading ? [] : result.data.myTasks;

  const incompleteTasks = tasks.filter((t) => !t.complete);
  const completedTasks = tasks.filter((t) => t.complete);

  return (
    <Wrapper>
      <Heading level={1} secondary handwriting>
        👍 My Tasks 👍
      </Heading>
      <NewTask />
      {incompleteTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      <Collapse text="Completed">
        {completedTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </Collapse>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0.5rem 1rem;
`;

export default Tasks;
