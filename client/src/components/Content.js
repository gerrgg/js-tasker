import React from "react";
import styled from "styled-components";

const Content = ({ page }) => <Wrapper>{page}</Wrapper>;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0.8;
`;

export default Content;
