import React from "react";
import App from "./App";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router} from "react-router-dom";

const container= ReactDOM.createRoot(document.getElementById("root"));
container.render(
    <Router>
        <App />
    </Router>,
    );