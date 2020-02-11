import React from 'react';
import UserForm from './UserForm'
import axios from 'axios';


const AddUser = () => {


    const onSubmit = (formValues) => {
        console.log(formValues);

        axios.post(`http://127.0.0.1:5000/user`, formValues)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

    }

    return (
        <UserForm
            onSubmit={onSubmit}
        />


    )

}

export default AddUser
