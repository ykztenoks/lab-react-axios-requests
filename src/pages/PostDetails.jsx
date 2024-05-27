import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";

function PostDetails() {
  const {postId} = useParams()
  
  const [post, setPost] = useState(null)

  async function getPost() {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      setPost(response.data)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <div>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>{post.id}</p>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}

export default PostDetails
