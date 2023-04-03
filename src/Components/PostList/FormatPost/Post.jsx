import VoteButtons from "./VoteButtons/VoteButtons";
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
              <VoteButtons/>
            </div>
        </div>
    );
}

export default Post;