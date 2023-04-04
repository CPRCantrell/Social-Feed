import React, { useState } from 'react';
import { FormatTime } from './FormatTime/FormatTime';
import "./CreatePostForm.css"

const CreatePostForm = (props) => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [nameMissing, setNameMissing] = useState(false);
    const [messageMissing, setMessageMissing] = useState(false);

    function handleSubmit(event){
        event.preventDefault()
        if(name !== '' && message !== ''){
            let postTime = new Date()
            postTime = FormatTime(postTime)
            props.newPost({name: name, message: message, time: postTime})
            setName('')
            setMessage('')
        }
        else{
            setNameMissing(false)
            setMessageMissing(false)
            if(name === ''){
                setNameMissing(true)
            }
            if(message === ''){
                setMessageMissing(true)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Name</label>
                <input type="text" className={`form-control ${nameMissing ? 'error' : ''}`} value={name} onChange={(event) => setName(event.target.value)} onFocus={() => setNameMissing(false)}/>
            </div>
            <div className='form-group need-space'>
                <label>Thoughts</label>
                <textarea value={message} className={`form-control ${messageMissing ? 'error' : ''}`} onChange={(event) => setMessage(event.target.value)} onFocus={() => setMessageMissing(false)}/>
            </div>
            <button type="submit" className='btn need-space'>Post Update</button>
        </form>
    );
}

export default CreatePostForm;