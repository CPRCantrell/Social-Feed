import React, { useState } from 'react';
import NavBar from "./Components/NavBar/NavBar";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import PostList from './Components/PostList/PostList';
import "./App.css"

function App() {

  const [posts, setPosts] = useState([]);
  const [settings, setSettings] = useState({bubbleView: false});

  function newPost(post){
    let tempPost = [...posts, post]
    setPosts(tempPost)
  }

  function changeSetting(setting,value){
    let tempHolder = {...settings}
    tempHolder[setting] = value
    setSettings(tempHolder)
  }

  return (
    <div>
      <NavBar changeSetting={changeSetting} settings={settings}/>
      <div className='web-container'>
        <section className='content-container'>
          <div className='box'>
            <CreatePostForm newPost={newPost}/>
          </div>
          <div className={settings.bubbleView ? 'bubble-view-area':'box'}>
            <h2 className={`post-title ${posts.length === 0 ? "hidden":settings.bubbleView ? 'bubble-view-title':''}`}>Most Recent Posts</h2>
            <PostList allPosts={posts} settings={settings}/>
          </div>
        </section>
        <footer>
        </footer>
      </div>
    </div>
  );
}

export default App;
