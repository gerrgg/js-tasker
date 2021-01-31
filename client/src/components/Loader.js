import styled, { keyframes } from "styled-components";

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  font-size: 5rem;
  position: absolute;
  width: 100%;
  top: 40%;
  text-align: center;
  zindex: -1;
`;

const Loader = () => <Rotate>🚀</Rotate>;

export default Loader;
