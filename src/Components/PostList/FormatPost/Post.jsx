import "./Post.css"

const Post = (props) => {
    return (
        <div>
            <div>
                <h3>{props.name}</h3>
            </div>
            <div>
                <p>{props.message}</p>
            </div>
            <div>
                <p>like</p>
                <p>dislike</p>
            </div>
        </div>
    );
}

export default Post;