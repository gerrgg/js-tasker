import React, { useState } from "react";
import Backdrop from "./components/Backdrop";
import GlobalStyles from "./GlobalStyles";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [token, setToken] = useState(
    localStorage.getItem("js-tasker") ? localStorage.getItem("js-tasker") : null
  );

  return (
    <>
      <GlobalStyles />
      <Backdrop>
        {!token ? (
          <Login setToken={setToken} />
        ) : (
          <Dashboard token={token} setToken={setToken} />
        )}
      </Backdrop>
    </>
  );
}

export default App;
