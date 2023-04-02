import React, { useState } from 'react';
import "./CreatePostForm.css"

const CreatePostForm = (props) => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(event){
        event.preventDefault()
        if(name !== '' && message !== ''){
            props.newPost({name: name, message: message})
            setName('')
            setMessage('')
        }
        else{
            let alertMessage = 'Please Input: '
            if(name === '' && message === ''){alertMessage += 'Name and Message'}
            else if (name === ''){alertMessage += 'Name'}
            else{alertMessage += 'Message'}
        }
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Name</label>
                <input type="text" className='form-control' value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className='form-group need-space'>
                <label>Thoughts</label>
                <textarea value={message} className='form-control' onChange={(event) => setMessage(event.target.value)}/>
            </div>
            <button type="submit" className='btn need-space'>Post Update</button>
        </form>
    );
}

export default CreatePostForm;