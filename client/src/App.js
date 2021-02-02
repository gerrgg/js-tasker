import React, { useState } from "react";
import Backdrop from "./components/Backdrop";
import GlobalStyles from "./GlobalStyles";
import Login from "./pages/Login";

function App() {
  const [token, setToken] = useState(
    localStorage.getItem("js-tasker") ? localStorage.getItem("js-tasker") : null
  );

  return (
    <>
      <GlobalStyles />
      <Backdrop>{!token ? <Login setToken={setToken} /> : null}</Backdrop>
    </>
  );
}

export default App;
