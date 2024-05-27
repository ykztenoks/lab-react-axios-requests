import React from 'react'
import { Link } from 'react-router-dom'

function PostList({posts}) {
  return (
    <>
        <h2>Post List</h2>
        {posts ? (
            posts.map((post) => {
                return (
                    <div>
                        <Link to={`/posts/${post.id}`}>
                            <h2>{post.title}</h2>
                        </Link>
                        <p>{post.body}</p>
                        <p>{post.id}</p>
                    </div>
                )
            })
        ) : (
            <h2>Loading...</h2>
        )}

    </>
  )
}

export default PostList