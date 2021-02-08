import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const Collapse = ({ text, children }) => {
  const [show, setShow] = useState(false);

  console.log(show);

  return (
    <Wrapper onClick={() => setShow(!show)}>
      <Flex>
        <Title>{text}</Title>
        {show ? <FaChevronDown /> : <FaChevronRight />}
      </Flex>
      <div style={{ display: show ? "block" : "none" }}>{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
`;

const Title = styled.h3`
  color: #fff;
  margin: 1rem 0 0.5rem 0;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Collapse;
