import React, { useState } from 'react';
import { FormatTime } from './FormatTime/FormatTime';
import "./CreatePostForm.css"

const CreatePostForm = (props) => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [nameInvalid, setNameInvalid] = useState(false);
    const [messageInvalid, setMessageInvalid] = useState(false);

    function handleSubmit(event){
        event.preventDefault()
        let postTime = new Date()
        postTime = FormatTime(postTime)
        props.newPost({name: name, message: message, time: postTime})
        setName('')
        setMessage('')
    }

    function handleNameBlur(value){
        if(value !== ''){
            setNameInvalid(false)
        }
    }

    function handleMessageBlur(value){
        if(value !== ''){
            setMessageInvalid(false)
        }
    }

    function handleNameInvalid(e){
        e.preventDefault()
        setNameInvalid(true)
    }

    function handleMessageInvalid(e){
        e.preventDefault()
        setMessageInvalid(true)
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <h2 className='form-title'>Share Your Thoughts</h2>
            <div className={`alert-text alert-title ${nameInvalid||messageInvalid ? '' : 'hidden'}`}>required fields must be filled</div>
            <div className='form-group'>
                <div className='input-label'>
                    <label>Name</label>
                    <div className={`alert-text ${nameInvalid ? '' : 'hidden'}`}>*required</div>
                </div>
                <input type="text" className={`form-control ${nameInvalid ? 'invalid-input' : ''}`} value={name} onChange={(event) => setName(event.target.value)} onBlur={(e) => handleNameBlur(e.target.value)} onInvalid={(e) => handleNameInvalid(e)} required/>
            </div>
            <div className='form-group need-space'>
                <div className='input-label'>
                    <label>Thoughts</label>
                    <div className={`alert-text ${messageInvalid ? 'invalid' : 'hidden'}`}>*required</div>
                </div>
                <textarea className={`form-control ${messageInvalid ? 'invalid-input' : ''}`} value={message} onChange={(event) => setMessage(event.target.value)} onBlur={(e) => handleMessageBlur(e.target.value)} onInvalid={(e) => handleMessageInvalid(e)} required/>
            </div>
            <button type="submit" className='btn need-space'>Post Update</button>
        </form>
    );
}

export default CreatePostForm;