import React, { useState } from "react";
import styled from "styled-components";

import { LoginForm, RegisterForm } from "../components/Login";

const Login = ({ setToken }) => {
  const [page, setPage] = useState("login");

  const registerUser = async (event) => {
    event.preventDefault();
    console.log("register");
  };

  const loginUser = async (event) => {
    event.preventDefault();
    console.log("login");
  };

  return (
    <Wrapper>
      {page === "login" ? (
        <LoginForm setPage={setPage} loginUser={loginUser} />
      ) : (
        <RegisterForm setPage={setPage} registerUser={registerUser} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 1rem;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default Login;
