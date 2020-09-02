import React, { useState } from 'react';

const AddUserForm = props => {
    const initialUser = { id: null, name: '', username: '' };
    const [user, setUser] = useState(initialUser);

    const handleChange = e => { 
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = e => { 
        e.preventDefault();
        if (user.name && user.username) {
            handleChange(e, props.addUser(user));
        }
        setUser(initialUser);
    };

    return (
        <form>
            <label>Name</label>
            <input className='u-full-width' type='text' name='name' value={user.name} onChange={handleChange} />
            <label>User Name</label>
            <input className='u-full-width' type='text' name='username' value={user.username} onChange={handleChange} />
            <button className='button-primary' type='submit' onClick={handleSubmit}>Add User</button>
        </form>
    );
};

export default AddUserForm;