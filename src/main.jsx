import React from "react";
import ReactDOM from "react-dom/client";
import Routeur from "./components/Routeur";
import "./style/Index-html/index.scss";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <Routeur />
    </React.StrictMode>
);
