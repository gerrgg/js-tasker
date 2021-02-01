import styled from "styled-components";

export const TextLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => (props.primary ? "var(--color-primary)" : "white")};
  text-align: ${(props) => (props.center ? "center" : "inherit")};
  display: ${(props) => (props.center ? "block" : "inline-block")};
`;

export default TextLink;
