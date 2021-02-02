import React from "react";
import useField from "../hooks/useField";
import Spacer from "./Spacer";
import { TextField, Form, FormControl } from "./Form";
import Heading from "./Heading";
import Flex from "./Flex";
import Button from "./Button";
import TextLink from "./TextLink";

export const LoginForm = ({ setPage, loginUser }) => {
  const username = useField("text");
  const password = useField("password");
  return (
    <Form onSubmit={loginUser}>
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
      <Button type="submit" onClick={() => setPage("register")} text underline>
        New here? Create an account.
      </Button>
    </Form>
  );
};

export const RegisterForm = ({ setPage, registerUser }) => {
  const username = useField("text");
  const password = useField("password");
  return (
    <Form onSubmit={registerUser}>
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
      <Button type="submit" onClick={() => setPage("login")} text>
        Already a user? Login here.
      </Button>
    </Form>
  );
};

const Login = { LoginForm, RegisterForm };

export default Login;
