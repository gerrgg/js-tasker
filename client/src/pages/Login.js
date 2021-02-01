import React from "react";
import useField from "../hooks/useField";
import styled from "styled-components";
import Spacer from "../components/Spacer";
import { TextField, Form, FormControl } from "../components/Form";
import Heading from "../components/Heading";
import Flex from "../components/Flex";
import Button from "../components/Button";
import TextLink from "../components/TextLink";

const Login = () => {
  const username = useField("text");
  const password = useField("password");

  return (
    <Wrapper>
      <Form>
        <Heading level={"2"} primary center>
          Login
        </Heading>
        <FormControl>
          <TextField {...username} placeholder="Username" autofill="username" />
        </FormControl>
        <FormControl>
          <TextField {...password} placeholder="Password" />
        </FormControl>
        <Flex>
          <TextLink>Forgot password?</TextLink>
          <Button secondary>Submit</Button>
        </Flex>
        <Spacer size={64} />
        <TextLink href="#" primary center>
          New here? Create an account.
        </TextLink>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default Login;
