import React from "react";
import useField from "../hooks/useField";
import styled from "styled-components";

const Login = () => {
  const username = useField("text");
  const password = useField("password");

  return (
    <Wrapper>
      <Form>
        <Header>Login</Header>
        <TextField {...username} placeholder="Username" />
        <TextField {...password} placeholder="Password" />
      </Form>
    </Wrapper>
  );
};

const Form = styled.form`
  overflow: hidden;
  background-color: #f7f7f7;
  padding: 1rem;
  background-color: var(--color, var(--color-dark-blue));
  color: #f7f7f7;
  box-shadow: 1px 1px 10px black;
`;

const Wrapper = styled.div`
  padding: 1rem;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TextField = styled.input`
  width: 100%;
  border: 1px solid transparent;
  padding: 8px 4px;
  margin-bottom: 1rem;
  font-size: 1.25rem;
`;

const Header = styled.h1`
  margin: 1rem 0 3rem;
`;

export default Login;
