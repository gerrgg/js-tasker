import styled from "styled-components";

const Heading = ({ level, primary, center, children, handwriting }) => {
  const tag = `h${level}`;
  return (
    <Wrapper
      as={tag}
      primary={primary}
      center={center}
      handwriting={handwriting}
    >
      {children}
    </Wrapper>
  );
};

// h2 doesnt mean anything since it gets overwritten
const Wrapper = styled.h2`
  margin: ${(props) => (props.noMargin ? "0" : "1rem 0 3rem")};
  font-family: ${(props) =>
    props.handwriting
      ? "'Permanent Marker', cursive;"
      : "'Londrina Solid', cursive;"}
  text-align: ${(props) => (props.center ? "center" : "inherit")};
  color: ${(props) => (props.primary ? "var(--color-primary)" : "white")};
`;

export default Heading;
