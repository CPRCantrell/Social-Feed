import VoteButtons from "./VoteButtons/VoteButtons";
import "./Post.css"

const Post = (props) => {

    function postTime(time){
        let timeString = `${time.month.long} ${time.day}, ${time.year.long} - ${time.hour.circatidal}:${time.minute} ${time.hour.meridiem}`
        return (timeString);
    }

    return (
        <div className="post-wrapper">
            <div className="name-time-wrapper">
                <h3 className="name-space">{props.name}</h3>
                <p className="time-space">
                    {postTime(props.time)}
                </p>
            </div>
            <div className="message-space">
                <p>{props.message}</p>
            </div>
            <div className="like-dislike-space">
              <VoteButtons/>
            </div>
        </div>
    );
}

export default Post;