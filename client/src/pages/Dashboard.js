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
      <Button onClick={() => logout()}>
        <FaSignOutAlt size={32} />
      </Button>
    </Header>
  );
};

const Button = styled.button`
  border: 0;
  color: inherit;
  background: transparent;
  cursor: pointer;
`;

const Header = styled.header`
  width: 100%;
  background-color: var(--color-dark-grey);
  padding: 1rem;
  color: var(--color-secondary);
`;

export default Dashboard;
