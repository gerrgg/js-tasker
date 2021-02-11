import React from "react";
import styled from "styled-components";
import Button from "./Button";
import EditTask from "./EditTask";
import { FaTimes } from "react-icons/fa";

const Shelf = ({ open, setOpenShelf, task }) => {
  return (
    <Root>
      <Overlay open={open} onClick={() => setOpenShelf(false)} />
      <Wrapper open={open}>
        <CloseButton text onClick={() => setOpenShelf(false)}>
          <FaTimes />
        </CloseButton>
        <Inner>{task ? <EditTask key={task.id} task={task} /> : null}</Inner>
      </Wrapper>
    </Root>
  );
};

export default Shelf;

const Root = styled.div`
  width: 100%;
  display: flex;
`;

const Overlay = styled.div`
  width: ${(props) => (props.open ? "100%" : "0%")};
  display: ${(props) => (props.open ? "block" : "none")};
  transition: width 0.2s ease-in-out;
  height: 100%;
  opacity: 0.9;
  background-color: #000;
  position: absolute;
  top: 43px;
  right: 0;
  cursor: pointer;
`;

const Wrapper = styled.div`
  max-width: 100%;
  margin-left: 45px;
  position: fixed;
  right: -45px;
  background-color: var(--color-primary);
  top: 43px;
  width: ${(props) => (props.open ? "100%" : "0%")};
  height: 100%;
  transition: width 0.2s ease-in-out;
  overflow: hidden;
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  width: auto;
  color: var(--color-primary-dark);
`;

const Inner = styled.div`
  padding: 0 1rem;
  height: 100%;
  width: 100%;
`;
