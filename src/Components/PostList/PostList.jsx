import Post from "./FormatPost/Post";
import "./PostList.css"

const PostList = (posts) => {

    return (
        <div>
            {posts.allPosts.map((post) => {
                return(<Post name={post.name} message={post.message}/>);
            })}
        </div>
    )
}

export default PostList;