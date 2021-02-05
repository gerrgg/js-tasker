import styled from "styled-components";

export const TextField = styled.input`
  width: 100%;
  border: 1px solid transparent;
  padding: 1rem 0rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  background-color: ${(props) =>
    props.variant === "line" ? "transparent" : "line"};
  border-bottom: ${(props) =>
    props.variant === "line" ? "3px solid #fff" : "0"};
  color: #fff;
`;

export const Form = styled.form`
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

export const FormControl = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0.5rem 0;
`;

const Components = { Form, FormControl, TextField };

export default Components;
