import styled from "styled-components";

const Button = styled.button`
  border: 1px solid
    ${(props) => (props.secondary ? "var(--color-secondary)" : "white")};
  background: transparent;
  color: #fff;
  padding: 8px 10px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.secondary ? "var(--color-secondary)" : "transparent"};
`;

export default Button;
