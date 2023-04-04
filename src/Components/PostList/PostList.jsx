import Post from "./FormatPost/Post";
import "./PostList.css"

const PostList = (props) => {

    function lastPost(checkForLast){
        return checkForLast === 0 ? '' : 'break'
    }

    return (
        <>
            {props.allPosts.map((post, index) => {
                return(
                <div className={`posting-space ${props.settings.bubbleView ? 'bubble-view-post':lastPost(index)}`} key={index}>
                    <Post name={post.name} message={post.message} time={post.time}/>
                </div>);
            }).reverse()}
        </>
    )
}

export default PostList;