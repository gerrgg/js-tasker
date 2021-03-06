import React from "react";
import Spacer from "./Spacer";
import { TextField, Form, FormControl } from "./Form";
import Heading from "./Heading";
import Flex from "./Flex";
import Button from "./Button";
import TextLink from "./TextLink";

export const LoginForm = ({ setPage, loginUser, username, password }) => (
  <Form onSubmit={loginUser}>
    <Heading level={"1"} primary center>
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
    <Button type="submit" onClick={() => setPage("register")} text underline>
      New here? Create an account.
    </Button>
  </Form>
);

export const RegisterForm = ({ setPage, registerUser, username, password }) => (
  <Form onSubmit={registerUser}>
    <Heading level={"1"} primary center>
      💎 Sell us your Soul! 💎
    </Heading>
    <FormControl>
      <TextField {...username} placeholder="Username" autofill="username" />
    </FormControl>
    <FormControl>
      <TextField {...password} placeholder="Password" autofill="new-password" />
    </FormControl>

    <Button secondary>Register</Button>
    <Spacer size={64} />
    <Button type="submit" onClick={() => setPage("login")} text>
      Already a user? Login here.
    </Button>
  </Form>
);

const Login = { LoginForm, RegisterForm };

export default Login;
