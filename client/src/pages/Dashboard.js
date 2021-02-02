import React from "react";
import styled from "styled-components";
import { FaSignOutAlt } from "react-icons/fa";

const Dashboard = ({ setToken }) => {
  const logout = () => {
    setToken(null);
    localStorage.removeItem("js-tasker");
  };
  return (
    <Header>
      <Inner>
        <Logo href="#">To Do</Logo>
        <LogoutButton onClick={() => logout()}>
          <FaSignOutAlt size={32} />
        </LogoutButton>
      </Inner>
    </Header>
  );
};

const LogoutButton = styled.button`
  border: 0;
  color: inherit;
  background: transparent;
  cursor: pointer;
  color: var(--color-secondary);
`;

const Header = styled.header`
  width: 100%;
  background-color: var(--color-dark-grey);
  padding: 0.5rem 0;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
`;

const Logo = styled.a`
  color: #fff;
  font-weight: 600;
  text-decoration: none;
`;

export default Dashboard;
