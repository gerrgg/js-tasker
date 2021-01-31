import React, { useState } from "react";
import Backdrop from "./components/Backdrop";
import GlobalStyles from "./GlobalStyles";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <GlobalStyles />
      <Backdrop>{!user ? <Login /> : null}</Backdrop>
    </>
  );
}

export default App;
