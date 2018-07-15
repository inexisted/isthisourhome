import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";



import {
    BrowserRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom'
  
ReactDOM.render(
    <BrowserRouter>
        <App/ >
    </BrowserRouter>, document.getElementById("app"));