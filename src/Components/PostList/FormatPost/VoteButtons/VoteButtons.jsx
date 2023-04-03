import React, { useState } from 'react';
import thumpsUp from "../../../../Assets/thumbs-up.png"
import './VoteButtons.css'

const VoteButtons = (props) => {

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
        <>
            <button className={`vote-btn left-vote ${activeBtn === "like" ? "like-active" : "off"}`} onClick={handleLikeClick}>
                <img className='icon thumbs-up' src={thumpsUp} alt='Thumbs up' />
            </button>
            <button className={`vote-btn right-vote ${activeBtn === "dislike" ? "dislike-active" : "off"}`} onClick={handleDisikeClick}>
                <img className='icon thumbs-down' src={thumpsUp} alt='Thumbs down' />
            </button>
        </>
    );
}

export default VoteButtons;