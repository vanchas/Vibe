import React, {useEffect} from 'react'
import AddPostForm from '../components/add-post/AddPostForm'
import {connect} from 'react-redux'
import {addProviderPost} from '../redux/actions/providerActions'
import {getAllPosts, getLocationsInfo, getCities, getAppInfo} from '../redux/actions/actions'
import Success from "../components/helpers/Success";
import Alert from "../components/helpers/Alert";

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
                     categories,
                     success,
                     alert
                 }) {

    useEffect(() => {
        getAllPosts();
        getLocationsInfo();
        getAppInfo();
    }, []);

    return (
        <div>
            {success && <Success/>}
            {alert && <Alert/>}
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
        categories: state.app.categories,
        success: state.app.success,
        alert: state.app.alert
    }
}

const mapDispatchToProps = {
    addProviderPost, getAllPosts, getLocationsInfo, getCities, getAppInfo
}


export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
