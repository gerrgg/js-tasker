import React from "react";
import useField from "../hooks/useField";
import styled from "styled-components";
import Spacer from "../components/Spacer";

const Login = () => {
  const username = useField("text");
  const password = useField("password");

  return (
    <Wrapper>
      <Form>
        <Header primary>Login</Header>
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

const Form = styled.form`
  background-color: #f7f7f7;
  padding: 1rem;
  width: 300px;
  height: 500px;
  margin: 0 auto;
  background-color: var(--color, var(--color-dark-grey));
  color: #f7f7f7;
  box-shadow: 1px 1px 10px black;
  opacity: 0.95;
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
  padding: 1rem 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const Header = styled.h1`
  margin: 1rem 0 3rem;
  text-align: center;
  color: ${(props) => (props.primary ? "var(--color-pretty-pink)" : "white")};
`;

const FormControl = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0.5rem 0;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  border: 1px solid
    ${(props) => (props.secondary ? "var(--color-redish-orange)" : "white")};
  background: transparent;
  color: #fff;
  padding: 8px 10px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.secondary ? "var(--color-redish-orange)" : "transparent"};
`;

const TextLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => (props.primary ? "var(--color-pretty-pink)" : "white")};
  text-align: ${(props) => (props.center ? "center" : "inherit")};
  display: ${(props) => (props.center ? "block" : "inline-block")};
`;

export default Login;
