import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <div>
            <ul className="topnav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login-form">Login</Link>
                </li>
                <li>
                    <Link to="/tasks">Task List</Link>
                </li>
                <li>
                    <Link to="/add-user">Add Users</Link>
                </li>
            </ul>
        </div>
    );
}
