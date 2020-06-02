import React from 'react'
import Post from './Post'

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p className="text-center">No posts...</p>
  }
  return syncPosts.map((post, i) => <Post post={post} key={i} />)
}

export default Posts;

