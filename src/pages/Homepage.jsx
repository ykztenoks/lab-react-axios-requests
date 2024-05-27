import React from 'react'
import PostList from '../components/PostList'

function Homepage({posts}) {
  return (
    <div>
      <h1>Homepage</h1>
      <PostList posts={posts}/>
    </div>
  )
}

export default Homepage
