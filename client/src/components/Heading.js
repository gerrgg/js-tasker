import styled from "styled-components";

const Heading = ({ level, primary, center, children }) => {
  const tag = `h${level}`;
  return (
    <Wrapper as={tag} primary center>
      {children}
    </Wrapper>
  );
};

// h2 doesnt mean anything since it gets overwritten
const Wrapper = styled.h2`
  margin: 1rem 0 3rem;
  text-align: ${(props) => (props.center ? "center" : "inherit")};
  color: ${(props) => (props.primary ? "var(--color-primary)" : "white")};
`;

export default Heading;
