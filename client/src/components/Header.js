import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

import { FaSignOutAlt } from "react-icons/fa";

const Header = ({ logout }) => (
  <Wrapper>
    <Inner>
      <Logo href="#">To Do</Logo>
      <Controls>
        <HeaderButton onClick={() => logout()}>
          <FaSignOutAlt size={27} />
        </HeaderButton>
      </Controls>
    </Inner>
  </Wrapper>
);

export default Header;

const Wrapper = styled.header`
  width: 100%;
  background-color: var(--color-dark-grey);
  padding: 0.5rem 0;
  height: 27px;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
`;

const Logo = styled.a`
  color: #fff;
  font-weight: 400;
  text-decoration: none;
  font-family: "Londrina Solid", cursive;
  font-size: 1.5rem;
  text-align: center;
`;

const Controls = styled.div`
  position: absolute;
  right: 0.5rem;
  display: flex;
`;

const HeaderButton = styled(Button)`
  border: 0;
  color: var(--color-secondary);
  padding: 0;
`;
