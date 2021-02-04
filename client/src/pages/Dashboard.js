import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

const Dashboard = ({ setToken }) => {
  const [page, setPage] = useState("tasks");

  const logout = () => {
    setToken(null);
    localStorage.removeItem("js-tasker");
  };
  return (
    <Wrapper>
      <Sidebar page={page} setPage={setPage} />
      <div style={{ width: "100%" }}>
        <Header logout={logout} />
        <Content page={page} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

export default Dashboard;
