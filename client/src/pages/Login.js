import React, { useState, useEffect } from "react";
import useField from "../hooks/useField";

import { useMutation } from "@apollo/client";
import { LOGIN_USER, REGISTER_USER } from "../queries/user";
import styled from "styled-components";

import { LoginForm, RegisterForm } from "../components/Login";

const Login = ({ setToken }) => {
  const [page, setPage] = useState("login");

  const username = useField("text");
  const password = useField("password");

  const [register, registerResult] = useMutation(REGISTER_USER, {
    onError: (error) => {
      console.log(error);
    },
    update: (store, response) => {
      setPage("login");
    },
  });

  const registerUser = async (event) => {
    event.preventDefault();
    register({
      variables: { username: username.value, password: password.value },
    });
  };

  const [login, loginResult] = useMutation(LOGIN_USER, {
    onError: (error) => {
      console.log(error);
    },
  });

  const loginUser = async (event) => {
    event.preventDefault();
    login({
      variables: { username: username.value, password: password.value },
    });
  };

  useEffect(() => {
    if (loginResult.data) {
      const token = loginResult.data.login.value;
      setToken(token);
      localStorage.setItem("js-tasker", token);
    }
  }, [loginResult.data, setToken]);

  return (
    <Wrapper>
      {page === "login" ? (
        <LoginForm
          setPage={setPage}
          loginUser={loginUser}
          username={username}
          password={password}
        />
      ) : (
        <RegisterForm
          setPage={setPage}
          registerUser={registerUser}
          username={username}
          password={password}
        />
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
