import React from 'react';
import LoginForm from './LoginForm';
import UsersContextProvider from '../../contexts/UsersListContext';

export default function Login() {
    return (
        <UsersContextProvider>
        <div>
            <LoginForm/>
        </div>
        </UsersContextProvider>
    )
}
