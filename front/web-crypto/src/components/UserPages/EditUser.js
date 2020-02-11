import React from 'react';
import UserForm from './UserForm'

const EditUser = () => {


    const onSubmit =(formValues) => {
        console.log(formValues);
    
    }

    return (
        <UserForm
            initialValues={{name:"coco"}}
            onSubmit={onSubmit}
        />

        
    )

}

export default EditUser