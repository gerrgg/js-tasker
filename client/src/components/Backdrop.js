import { useEffect } from "react";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Loader from "./Loader";
import { FaRedo, FaLock, FaLockOpen } from "react-icons/fa";

// get random image from picsum
const getBackgroundImage = () =>
  `https://picsum.photos/seed/${Math.floor(Math.random() * 100 + 1)}/${
    window.innerWidth
  }/${window.innerHeight}`;

function Backdrop({ opacity, color, children }) {
  // set to true to show loader
  const [loading, setLoading] = useState(true);

  // check for saved background in local storage
  const [savedBackground, setSavedBackground] = useState(
    localStorage.getItem("js-tasker-bg")
      ? localStorage.getItem("js-tasker-bg")
      : false
  );

  // if we have a saved background, use it else get a new one
  const [background, setBackground] = useState(
    savedBackground ? savedBackground : getBackgroundImage()
  );

  // update the background
  const updateBackground = () => {
    setLoading(true);
    setBackground(getBackgroundImage());
  };

  // lock the background and save in local storage for next time
  const lockBackground = () => {
    if (savedBackground === false) {
      setSavedBackground(background);
      localStorage.setItem("js-tasker-bg", background);
    } else {
      setSavedBackground(false);
      localStorage.removeItem("js-tasker-bg");
    }
  };

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
          backgroundImage: `url(${background})`,
        }}
      >
        <Controls>
          <BackgroundButton
            disabled={savedBackground ? true : false}
            onClick={() => updateBackground()}
          >
            <FaRedo />
          </BackgroundButton>
          <BackgroundButton onClick={() => lockBackground(true)}>
            {savedBackground ? <FaLock /> : <FaLockOpen />}
          </BackgroundButton>
        </Controls>
        {loading ? <Loader /> : children}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  opacity: var(--opacity, 0.9);
  background-image: inherit;
  background-color: var(--color, var(--color-dark-blue));
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  z-index: 1;
`;

const Controls = styled.div`
  position: absolute;
  right: 0;
  color: #333;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BackgroundButton = styled(Button)`
  padding: 0.25rem 0.5rem;
  border: 0;
`;

export default Backdrop;
