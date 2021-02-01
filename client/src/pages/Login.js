import React, { useState } from "react";
import useField from "../hooks/useField";
import styled from "styled-components";
import Spacer from "../components/Spacer";
import { TextField, Form, FormControl } from "../components/Form";
import Heading from "../components/Heading";
import Flex from "../components/Flex";
import Button from "../components/Button";
import TextLink from "../components/TextLink";

const Login = () => {
  const [page, setPage] = useState("login");

  return (
    <Wrapper>
      {page === "login" ? (
        <LoginForm setPage={setPage} />
      ) : (
        <RegisterForm setPage={setPage} />
      )}
    </Wrapper>
  );
};

const LoginForm = ({ setPage }) => {
  const username = useField("text");
  const password = useField("password");
  return (
    <Form>
      <Heading level={"2"} primary center>
        Welcome back, Friend. 👋
      </Heading>
      <FormControl>
        <TextField {...username} placeholder="Username" autofill="username" />
      </FormControl>
      <FormControl>
        <TextField {...password} placeholder="Password" autofill="password" />
      </FormControl>
      <Flex>
        <TextLink>Forgot password?</TextLink>
        <Button secondary>Login</Button>
      </Flex>
      <Spacer size={64} />
      <Button onClick={() => setPage("register")} text underline>
        New here? Create an account.
      </Button>
    </Form>
  );
};

const RegisterForm = ({ setPage }) => {
  const username = useField("text");
  const password = useField("password");
  return (
    <Form>
      <Heading level={"2"} primary center>
        💎 Sell us your Soul! 💎
      </Heading>
      <FormControl>
        <TextField {...username} placeholder="Username" autofill="username" />
      </FormControl>
      <FormControl>
        <TextField
          {...password}
          placeholder="Password"
          autofill="new-password"
        />
      </FormControl>

      <Button secondary>Register</Button>
      <Spacer size={64} />
      <Button onClick={() => setPage("login")} text>
        Already a user? Login here.
      </Button>
    </Form>
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
