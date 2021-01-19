import React from "react";
import TaskListContextProvider from "../contexts/TaskListContext";
import TaskForm from "./pages/tasks/TaskForm";

import "../App.css";
import Header from "./partials/Header";

const Index = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />

          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default Index;