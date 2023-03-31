import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from "./Components/NavBar/NavBar";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import PostList from './Components/PostList/PostList';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsExist = ReactDOM.createRoot(document.getElementById('postList'));
    postsExist.render(<PostList allPosts={posts}/>)
  }, [posts]);

  function newPost(post){
    let tempPost = [post, ...posts]
    setPosts(tempPost)
  }

  return (
    <div>
      <NavBar/>
      <div>
        <div>
          <CreatePostForm newPost={newPost}/>
        </div>
        <div id='postList'></div>
      </div>
    </div>
  );
}

export default App;
