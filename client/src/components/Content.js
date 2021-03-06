import React from "react";
import styled from "styled-components";
import Tasks from "../pages/Tasks";

const Content = ({ page, showTask }) => (
  <Wrapper>
    {
      {
        tasks: <Tasks showTask={showTask} />,
      }[page]
    }
  </Wrapper>
);

const Wrapper = styled.div`
  color: #fff;
  font-weight: 700;
`;

export default Content;
