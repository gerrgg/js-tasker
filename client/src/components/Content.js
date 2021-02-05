import React from "react";
import styled from "styled-components";
import Tasks from "../pages/Tasks";

const Content = ({ page }) => (
  <Wrapper>
    {
      {
        tasks: <Tasks />,
      }[page]
    }
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.75;
  color: #fff;
  font-weight: 700;
`;

export default Content;
