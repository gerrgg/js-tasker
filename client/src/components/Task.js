import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "./Form";

const Task = () => {
  const addTask = () => {
    console.log("add task");
  };

  return (
    <TaskField
      onBlur={() => {
        addTask();
      }}
      onClick={() => {}}
      variant="line"
      placeholder="Add a new task"
    />
  );
};

const TaskField = styled(TextField)`height: 15px; transition: height: .5s;`;

export default Task;
