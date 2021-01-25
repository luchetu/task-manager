import React from "react";
//import TaskListContextProvider from "../contexts/TaskListContext";
import TaskForm from "./pages/tasks/TaskForm";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./login/LoginForm";
import "../App.css";
import Header from "./partials/Header";
import NavBar from "./partials/NavBar";
import Add from "./pages/users/Add";
import AuthenticatedRoute from "../AuthenticatedRoute";

const Todo = () => {
    return (
        <>
        <NavBar />
        <div className="container">
            <div className="app-wrapper">

                <Header />
                <div className="main">
                    <Switch>
                        <Route exact path="/login-form" component={LoginForm} />
                        <AuthenticatedRoute exact path="/add-user" component={Add} />
                        <AuthenticatedRoute path="/" component={TaskForm} />

                    </Switch>
                </div>
            </div>
        </div>
        </>
    );
};

export default Todo;
