import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([
    {
      id: Math.random().toString(),
      name: 'John Smith',
      age: 32,
    },
    {
      id: Math.random().toString(),
      name: 'John Doe',
      age: 23,
    },
  ]);

  const addUserHandler = (name, age) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { id: Math.random().toString(), name, age }];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
