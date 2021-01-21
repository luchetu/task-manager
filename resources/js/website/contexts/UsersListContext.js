import React, { createContext, useState, useEffect } from "react";

export const UsersListContext = createContext();

const UserListProvider = props => {
    const initialState = JSON.parse(localStorage.getItem("users")) || [];

    const [users, setUsers] = useState(initialState);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const [editUsers, setEditUsers] = useState(null);

    // Add users
    const addUsers = (email, password) => {
        setTasks([...users, { email, password, id: uuid() }]);
    };

    // Remove users
    const removeUser = id => {
        setUsers(users.filter(user => user.id !== id));
    };

    // Edit task
    const editUser = (email, password, id) => {
        const newUser = users.map(user =>
            user.id === id ? { email, password, id } : user
        );

        setUsers(newTasks);
        setEditUsers(null);

    };
    return (
        <UsersListContext.Provider
          value={{
            users,
            addUsers,
            removeUser,
            editUser,

          }}
        >
          {props.children}
        </UsersListContext.Provider>
      )
};
export default UserListProvider