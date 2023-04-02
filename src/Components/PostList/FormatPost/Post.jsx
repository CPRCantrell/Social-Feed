import React, { useState } from 'react';
import thumpsUp from "../../../Assets/thumbs-up.png"
import "./Post.css"

const Post = (props) => {

    const [activeBtn, setActiveBtn] = useState("none");

    const handleLikeClick = () => {
        if (activeBtn === "none") {
          setActiveBtn("like");
        }
        else if (activeBtn === 'like'){
          setActiveBtn("none");
        }
        else if (activeBtn === "dislike") {
          setActiveBtn("like");
        }
    };

      const handleDisikeClick = () => {
        if (activeBtn === "none") {
          setActiveBtn("dislike");
        }
        else if (activeBtn === 'dislike'){
          setActiveBtn("none");
        }
        else if (activeBtn === "like") {
          setActiveBtn("dislike");
        }
    };

    return (
        <div className="post-wrapper">
            <div>
                <h3 className="name-space">{props.name}</h3>
            </div>
            <div className="message-space">
                <p>{props.message}</p>
            </div>
            <div className="like-dislike-space">
                <button className={`vote-btn left-vote ${activeBtn === "like" ? "like-active" : "off"}`} onClick={handleLikeClick}>
                    <img className='icon thumbs-up' src={thumpsUp} alt='Thumbs up' />
                </button>
                <button className={`vote-btn right-vote ${activeBtn === "dislike" ? "dislike-active" : "off"}`} onClick={handleDisikeClick}>
                    <img className='icon thumbs-down' src={thumpsUp} alt='Thumbs down' />
                </button>
            </div>
        </div>
    );
}

export default Post;