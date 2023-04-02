import Post from "./FormatPost/Post";
import "./PostList.css"

const PostList = (props) => {

    function lastPost(checkForLast){
        return checkForLast === props.allPosts.length-1 ? '' : 'break'
    }

    return (
        <>
            {props.allPosts.map((post, index) => {
                return(
                <div className={`posting-space ${lastPost(index)}`}>
                    <Post name={post.name} message={post.message} />
                </div>);
            })}
        </>
    )
}

export default PostList;