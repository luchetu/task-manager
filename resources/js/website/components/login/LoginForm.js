import React, { useState, useEffect } from "react";
import Auth from "../../../apis/Auth";
import { withRouter, useHistory} from "react-router";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error_message, setErrorMessage] = useState("");
    const [errors, setErrors] = useState("");

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        Auth.login(
            { email: email, password: password },
            response => {
                if (response.data.user.is_admin == 1) {
                    for (var i in response.data.user) {
                        localStorage.setItem(
                            "user." + i,
                            response.data.user[i]
                        );
                        setTimeout(() => {
                            history.push("/");
                        }, 500);
                    }
                } else {
                    localStorage.clear();
                    this.setErrorMessage({
                        error_message: "Unauthorized"
                    });
                }
            },
            err => {
                setErrorMessage(err.response.data.message);
                setErrors(err.response.data.errors);
            }
        );
    };

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
                {error_message ? (
                    <div className="alert alert-danger">
                        {error_message}
                    </div>
                ) : null}
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
                    <button className="btn add-task-btn">Login</button>
                </div>
            </form>
        </div>
    );
};


export default withRouter(LoginForm);
