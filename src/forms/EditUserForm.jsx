import React, { useEffect, useState } from 'react';

const EditUserForm = props => {

    useEffect(() => {
        setUser(props.currentUser);
    }, [props]);

    const [user, setUser] = useState(props.currentUser);
    
    const handleChange = e => { 
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const handleSubmit = e => { 
        e.preventDefault();
        if (user.name && user.username) props.updateUser(user);
    };

    return (
        <form>
            <label>Name</label>
            <input className='u-full-width' type='text' name='name' value={user.name} onChange={handleChange} />
            <label>User Name</label>
            <input className='u-full-width' type='text' name='username' value={user.username} onChange={handleChange} />
            <button className='button-primary' type='submit' onClick={handleSubmit}>Edit User</button>
            <button type='submit' onClick={()=>props.setEditing(false)}>Cancel</button>
        </form>
    );
};

export default EditUserForm;