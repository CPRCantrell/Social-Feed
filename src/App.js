import React, { useState } from 'react';
import NavBar from "./Components/NavBar/NavBar";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import PostList from './Components/PostList/PostList';
import "./App.css"

function App() {

  const [posts, setPosts] = useState([]);

  function newPost(post){
    let tempPost = [post, ...posts]
    setPosts(tempPost)
  }

  return (
    <div>
      <NavBar/>
      <div className='content-container'>
        <div className='box'>
          <CreatePostForm newPost={newPost}/>
        </div>
        <div className='box'>
          <PostList allPosts={posts} />
        </div>
      </div>
    </div>
  );
}

export default App;
