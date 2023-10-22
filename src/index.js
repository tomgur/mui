import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from "@mui/material";
import theme from "./theme";
import {GoogleOAuthProvider} from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={"489467555452-o2fkcperpqrv8uifnbbh4nmv46280vh2.apps.googleusercontent.com"}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </ThemeProvider>
  </GoogleOAuthProvider>
);