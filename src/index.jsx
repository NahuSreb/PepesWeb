import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from "./Routes"
import { UserProvider } from "./context/userContext"

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Routes />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

