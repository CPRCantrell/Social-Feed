import Post from "./FormatPost/Post";
import "./PostList.css"

const PostList = (posts) => {

    const posting = [...posts.allPosts]

    function lastPost(checkForLast){
        return checkForLast === posting.length-1 ? '' : 'break'
    }

    return (
        <>
            {posting.map((post, index) => {
                return(<div className={`posting-space ${lastPost(index)}`}><Post name={post.name} message={post.message} /></div>);
            })}
        </>
    )
}

export default PostList;