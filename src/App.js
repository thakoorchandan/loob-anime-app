import React, { useState, useEffect } from "react";

import Home from "./Components/Home";

import getAuthToken from "./Providers/authService";

import "./App.css";

function App() {
  const [token, setAuthToken] = useState({});

  useEffect(() => {
    getAuthToken().then((res) => setAuthToken(res.token));
  }, []);

  return (
    <div className="App">
      <Home token={token} />
    </div>
  );
}

export default App;
