import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Dashboard = ({ setToken }) => {
  const logout = () => {
    setToken(null);
    localStorage.removeItem("js-tasker");
  };
  return (
    <Wrapper>
      <Sidebar />
      <div style={{ width: "100%" }}>
        <Header logout={logout} />
        <Content />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0.8;
`;
export default Dashboard;
