import { useEffect } from "react";
import React, { useState } from "react";
import styled from "styled-components";
import Loader from "./Loader";

const getBackgroundImage = () => {
  return `https://picsum.photos/seed/${Math.random(1, 1000)}/${
    window.innerWidth
  }/${window.innerHeight}`;
};

function Backdrop({ opacity, color, children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <>
      <Wrapper
        style={{
          "--color": color,
          "--opacity": opacity,
        }}
      >
        {loading ? <Loader /> : children}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  opacity: var(--opacity, 0.9);
  transition: background-image 1s ease-in-out;
  background-color: var(--color, var(--color-dark-blue));
  background-image: url(${getBackgroundImage()});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  z-index: 1;
`;

export default Backdrop;
