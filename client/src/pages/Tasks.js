import React, { useState } from "react";
import styled from "styled-components";
import Heading from "../components/Heading";
import Task from "../components/Task";

const Tasks = () => (
  <Wrapper>
    <Heading level={2} primary>
      👍 My Tasks 👍
    </Heading>
    <Task>Write a new task</Task>
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 0.5rem;
`;

export default Tasks;
