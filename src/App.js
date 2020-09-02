import React, { useState, useEffect } from 'react';
import UserTable from './tables/UserTable';
import userList from './data';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import UseAsyncRequest from './hooks/UseAsyncRequest';


function App() {
  const [data, loading] = UseAsyncRequest(5);
  // const [users, setUsers] = useState(null);
  const [users, setUsers] = useState(userList);
  useEffect(() => {
    if (data) {
      const formattedUsers = data.map((obj, i) => {
        return {
          id: i,
          name: obj.name.first,
          username: obj.name.first + obj.name.last
        }
      });
      setUsers(formattedUsers);
    }
  }, [data]);

  const [editing, setEditing] = useState(false);
  const initialUser = { id: null, name: '', username: '' };
  const [currentUser, setCurrentuser] = useState(initialUser);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  const editUser = (id, user) => { 
    setEditing(true);
    setCurrentuser(user);
  };

  const updateUser = newUser => { 
    setUsers(users.map(user => user.id === currentUser.id ? newUser : user));
    setCurrentuser(initialUser);
    setEditing(false);
  };

  return (
    <div className='container'>
      <h1>REACT CRUD APP</h1>
      <div className='row'>
        <div className='five columns'>
          {
            editing ? (
              <div>
                <h2>Edit User</h2>
                <EditUserForm
                  currentUser={currentUser}
                  setEditing={setEditing}
                  updateUser={updateUser}
                />
              </div>
            ) : (
                <div>
                  <h2>Add User</h2>
                  <AddUserForm addUser={addUser} />
                </div>
            )
          }
        </div>
        <div className='seven columns'>
            <h2>View Users</h2>
            <UserTable
              users={users}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          </div>
      </div>
    </div>
  );
}

export default App;
