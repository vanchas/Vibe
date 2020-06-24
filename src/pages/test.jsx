import React from 'react'
import PostForm from '../components/test/PostForm'
import Posts from '../components/test/Posts'
import FetchedPosts from '../components/test/FetchedPosts'
import { connect } from 'react-redux';

const Test = props => {
  return (
    <div className="text-white container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Sync posts</h2>
          <Posts syncPosts={props.syncPosts} />
        </div>
        <div className="col">
          <h2>Async posts</h2>
          <FetchedPosts posts={[]} />
        </div>
      </div>
      <button onClick={() => {
      }}>posts</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    syncPosts: state.testPosts.posts
  };
};

const mapDispatchToProps = {
  // decrementCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);