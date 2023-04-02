import React, { useState, useEffect } from 'react';
import "./Post.css"

const Post = (props) => {

    return (
        <div className="post-wrapper">
            <div>
                <h3 className="name-space">{props.name}</h3>
            </div>
            <div className="message-space">
                <p>{props.message}</p>
            </div>
            <div className="like-dislike-space">
                <button className={`vote-btn like ${like}`} onClick={() => setSwitcher('like')}>like</button>
                <button className={`vote-btn dislike ${dislike}`} onClick={() => setSwitcher('dislike')}>Dislike</button>
            </div>
        </div>
    );
}

export default Post;