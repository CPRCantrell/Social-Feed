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

  function likeOrDislike (name, like, dislike){
    let tempPost = [...posts]
    tempPost.map((post) => {
      if(name === post.name){
        return{name: post.name, message: post.message, like: like, dislike: dislike}
      }
      else{
        return{name: post.name, message: post.message, like: post.like, dislike: post.dislike}
      }
    })
    setPosts(tempPost)
  }

  return (
    <div>
      <NavBar/>
      <div className='content-container'>
        <div className='box'>
          <CreatePostForm newPost={newPost}/>
        </div>
        <div className={'box post-area'}>
          <PostList allPosts={posts} likeOrDislike={likeOrDislike} />
        </div>
      </div>
    </div>
  );
}

export default App;
