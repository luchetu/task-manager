import React from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Login from "./components/login/Login";
import AuthenticatedRoute from './AuthenticatedRoute';
import Dashboard from "./components/pages/Dashboard";
import ListTasks from "./components/pages/tasks/Task";
import ListUsers from "./components/pages/users/Index";
import AddTasks from "./components/pages/tasks/Add";
import EditTasks from "./components/pages/tasks/Edit";
import AddUsers from "./components/pages/users/Add";
import EditUsers from "./components/pages/users/Edit";

class Routes extends React.Component
{
    render()
    {
        return (
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/tasks' component={ListTasks} />
                <Route path='/tasks/add' component={AddTasks} />
                <Route path='/tasks/edit/:id' component={EditTasks} />
                <Route exact path='/users' component={ListUsers} />
                <Route path='/users/add' component={AddUsers} />
                <Route path='/users/edit/:id' component={EditUsers} />
            </Switch>
        )
    }
}

export default Routes;