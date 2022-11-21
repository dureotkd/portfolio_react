import React from "react";
import "./App.css";

import Login from "./pages/Login";
import Join from "./pages/Join";
import { Route, Routes } from "react-router-dom";

const StoreContext = React.createContext({});

/**
 *
 * 페이지 여러개 있는데
 *
 */
function App() {
  const [loginUser, setLoginUser] = React.useState({});

  return (
    <StoreContext.Provider
      value={{
        loginUser: loginUser,
      }}
    >
      <Routes>
        <Route exact path="/join" element={<Join />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </StoreContext.Provider>
  );
}

export default App;
