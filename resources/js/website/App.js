import React from "react";
import ReactDOM from "react-dom";
import Todo from "./components/Todo";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Todo />
    </BrowserRouter>,
    document.getElementById("app")
);
