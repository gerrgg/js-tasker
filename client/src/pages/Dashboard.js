import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { MY_TASKS } from "../queries/task";
import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

const Dashboard = ({ setToken }) => {
  const { client } = useQuery(MY_TASKS, { fetchPolicy: "network-only" });

  const [page, setPage] = useState("tasks");

  const logout = () => {
    setToken(null);
    localStorage.removeItem("js-tasker");
    client.clearStore();
  };

  return (
    <Wrapper>
      <Sidebar page={page} setPage={setPage} />
      <div style={{ width: "100%" }}>
        <Header logout={logout} />
        <Overlay />
        <Content page={page} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.75;
  background-color: #333;
  position: absolute;
  z-index: -1;
`;

export default Dashboard;
