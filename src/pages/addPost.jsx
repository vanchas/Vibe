import React, { useEffect } from 'react'
import AddPostForm from '../components/add-post/AddPostForm'
import { connect } from 'react-redux'
import { addProviderPost } from '../redux/actions/providerActions'
import { getAllPosts, getLocationsInfo, getCities, getAppInfo } from '../redux/actions/actions'

function AddPost({
  getAppInfo,
  getCities,
  addProviderPost,
  getLocationsInfo,
  posts,
  getAllPosts,
  affiliation,
  availability,
  available_to,
  ethnicity,
  eyes,
  hair,
  states,
  cities,
  categories
}) {

  useEffect(() => {
    getAllPosts();
    getLocationsInfo();
    getAppInfo();
  }, []);

  return (
    <div>
      <div className="h3 text-white py-2 text-center">{posts && posts.length ? posts.length : 0} posts</div>
      <AddPostForm
        addProviderPost={addProviderPost}
        affiliation={affiliation}
        availability={availability}
        available_to={available_to}
        ethnicity={ethnicity}
        eyes={eyes}
        hair={hair}
        states={states}
        cities={cities}
        getCities={getCities}
        categories={categories}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    affiliation: state.app.affiliation,
    availability: state.app.availability,
    available_to: state.app.available_to,
    ethnicity: state.app.ethnicity,
    eyes: state.app.eyes,
    hair: state.app.hair,
    posts: state.app.posts,
    states: state.app.states,
    cities: state.app.cities,
    categories: state.app.categories
  }
}

const mapDispatchToProps = {
  addProviderPost, getAllPosts, getLocationsInfo, getCities, getAppInfo
}


export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
