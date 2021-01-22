import React, { useState, useContext, useEffect } from "react";
import Auth from '../../../apis/Auth';

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault()
        Auth.login({email:email, password:password}, (response) => {
            console.log(response);
        }, (err) => {
            console.log(err);
        });
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };

    useEffect(() => {
        setPassword("");
        setEmail("");
    }, []);

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="your email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className="task-input"
                />

                <input
                    type="password"
                    placeholder="your password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    className="task-input"
                />

                <div className="buttons">
                    <button className="btn add-task-btn">
                       Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
