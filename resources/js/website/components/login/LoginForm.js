import React from "react";

const LoginForm = () => {
    return (
        <div>
            <form className="form">
                <input
                    type="text"
                    placeholder="your email"
                    required
                    className="task-input"
                />

                <input
                    type="password"
                    placeholder="your password"
                    required
                    className="task-input"
                />

                <div className="buttons">
                    <button className="btn clear-btn">Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
