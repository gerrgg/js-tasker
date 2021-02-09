import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const Collapse = ({ text, children }) => {
  const [show, setShow] = useState(true);

  return (
    <Wrapper>
      <Flex onClick={() => setShow(!show)}>
        <Title>{`${text} (${children.length})`}</Title>
        {show ? <FaChevronDown /> : <FaChevronRight />}
      </Flex>
      <Inner show={show}>{children}</Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
`;

const Inner = styled.div`
  transition: max-height 0.15s ease-in-out;
  display: ${(props) => (props.show ? "block" : "none")};
  overflow: hidden;
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
