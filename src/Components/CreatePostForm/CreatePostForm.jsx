import React, { useState } from 'react';
import "./CreatePostForm.css"

const CreatePostForm = (props) => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(event){
        if(name !== '' && message !== ''){
            event.preventDefault()
            props.newPost({name: name, message: message, like:false, dislike:false})
            setName('')
            setMessage('')
        }
        else{
            let alertMessage = 'Please Input: '
            if(name === '' && message === ''){alertMessage += 'Name and Message'}
            else if (name === ''){alertMessage += 'Name'}
            else{alertMessage += 'Message'}
            alert(alertMessage)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div>
                <label>Thoughts</label>
                <textarea value={message} onChange={(event) => setMessage(event.target.value)}/>
            </div>
            <button type="submit">Post</button>
        </form>
    );
}

export default CreatePostForm;