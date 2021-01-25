import React, { useState, useEffect } from "react";
import User from "../../../../apis/User";
import { withRouter, useHistory } from "react-router";

const AddUser = () => {
    const [email, setEmail] = useState("");
    const [names, setNames] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [error_message, setErrorMessage] = useState("");
    const [errors, setErrors] = useState("");

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        setNames(firstName + " " + lastName);
        User.add(
            {
                email: email,
                password: password,
                names: names,
                birthDate: birthDate,
                is_admin:1
            },
            response => {
                if (response.code == 201) {
                    setTimeout(() => {
                        history.push("/");
                    }, 500);
                } else {
                    this.setErrorMessage({
                        error_message: "user not added"
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

    const handleFirstNameChange = e => {
        setFirstName(e.target.value);
    };
    const handleLastNameChange = e => {
        setLastName(e.target.value);
    };
    const handleBirthChange = e => {
        setBirthDate(e.target.value);
    };
    useEffect(() => {
        setPassword("");
        setEmail("");
        setFirstName("");
        setLastName("");
        setBirthDate("");
    }, []);

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                {error_message ? (
                    <div className="alert alert-danger">{error_message}</div>
                ) : null}
                <input
                    type="text"
                    placeholder="first name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    required
                    className="task-input"
                />
                <input
                    type="text"
                    placeholder="last name"
                    value={lastName}
                    onChange={handleLastNameChange}
                    required
                    className="task-input"
                />
                <input
                    type="date"
                    className="task-input"
                    placeholder="date of birth"
                    value={birthDate}
                    onChange={handleBirthChange}
                    required
                ></input>
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
                    <button className="btn add-task-btn">Add User</button>
                </div>
            </form>
        </div>
    );
};

export default withRouter(AddUser);
