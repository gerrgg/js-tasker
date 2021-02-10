import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { FaTimes } from "react-icons/fa";

const Shelf = ({ open, setOpenShelf }) => {
  return (
    <Root>
      <Overlay open={open} onClick={() => setOpenShelf(false)} />
      <Wrapper open={open}>
        <CloseButton text onClick={() => setOpenShelf(false)}>
          <FaTimes />
        </CloseButton>
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
  top: 0;
  right: 0;
  cursor: pointer;
`;

const Wrapper = styled.div`
  max-width: 300px;
  position: fixed;
  right: 0;
  background-color: var(--color-primary);
  top: 0;
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
`;
