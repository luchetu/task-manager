import React, { useState, useContext, useEffect } from 'react';
import { UsersListContext } from '../../contexts/UsersListContext';

const LoginForm = () => {
    const { login } = useContext(UsersListContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {

  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  useEffect(() => {
      setPassword('');
      setEmail('');

  }, [])


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
                    <button className="btn clear-btn">Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
