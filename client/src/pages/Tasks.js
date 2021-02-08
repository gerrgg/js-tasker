import React, { useState } from "react";
import styled from "styled-components";
import Heading from "../components/Heading";
import NewTask from "../components/NewTask";

const Tasks = () => (
  <Wrapper>
    <Heading level={2} primary>
      👍 My Tasks 👍
    </Heading>
    <NewTask />
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 0.5rem 1rem;
`;

export default Tasks;
