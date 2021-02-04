import styled from "styled-components";

const Button = styled.button`
  border: 1px solid
    ${(props) => (props.secondary ? "var(--color-secondary)" : "white")};
  border-width: ${(props) => (props.text ? "0" : "1px")};
  background-color: ${(props) =>
    props.secondary ? "var(--color-secondary)" : "transparent"};
  width: ${(props) => (props.center ? "100%" : "inherit")};
  background: transparent;
  color: #fff;
  padding: 8px 10px;
  font-size: 1rem;
  cursor: pointer;
  ::focus {
    outline: 0;
  }
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

export default Button;
