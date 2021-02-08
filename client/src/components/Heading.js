import styled from "styled-components";

const Heading = ({ level, primary, center, children, noMargin }) => {
  const tag = `h${level}`;
  return (
    <Wrapper as={tag} primary={primary} center={center} noMargin={noMargin}>
      {children}
    </Wrapper>
  );
};

// h2 doesnt mean anything since it gets overwritten
const Wrapper = styled.h2`
  margin: ${(props) => (props.noMargin ? "0" : "1rem 0 3rem")};
  font-family: "Londrina Solid", cursive;
  letter-spacing: 1px;
  text-align: ${(props) => (props.center ? "center" : "inherit")};
  color: ${(props) => (props.primary ? "var(--color-primary)" : "white")};
`;

export default Heading;
