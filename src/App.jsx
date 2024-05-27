import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import axios from "axios";

import React from "react";
import PostDetails from './pages/PostDetails';

function App() {
  const [posts, setPosts] = useState(null)

  async function getPosts() {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPosts(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])


  return (
    <div>
      <h1>Wassup</h1>
      <Routes>
        <Route path='/' element={<Homepage posts={posts}/>}/>
        <Route path='/posts/:postId' element={<PostDetails />}/>
      </Routes>

    </div>
  );
}

export default App;

