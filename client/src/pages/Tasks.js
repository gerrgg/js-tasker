import React from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Heading from "../components/Heading";
import NewTask from "../components/NewTask";
import Task from "../components/Task";
import { MY_TASKS } from "../queries/task";
import Collapse from "../components/Collapse";

const Tasks = ({ showTask }) => {
  const result = useQuery(MY_TASKS);

  const tasks = result.loading ? [] : result.data.myTasks;

  const incompleteTasks = tasks.filter((t) => !t.complete);
  const completedTasks = tasks.filter((t) => t.complete);

  return (
    <Wrapper>
      <Heading level={1} secondary handwriting center>
        👍 Your Tasks 👍
      </Heading>
      <NewTask />
      <Scrollable>
        {incompleteTasks.map((task) => (
          <Task key={task.id} task={task} showTask={showTask} />
        ))}
        <Collapse text="Completed">
          {completedTasks.map((task) => (
            <Task key={task.id} task={task} showTask={showTask} />
          ))}
        </Collapse>
      </Scrollable>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0.5rem 1rem;
`;
const Scrollable = styled.div`
  padding-right: 1rem;
  position: fixed;
  overflow-y: auto;
  height: 450px;
  width: 290px;
  right: 0px;
`;

export default Tasks;
