import {
    TEST_CREATE_POST,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ALERT,
    HIDE_ALERT,
    TEST_REQUEST_POSTS,
    GET_ALL_POSTS,
    GET_LOCAITONS_INFO,
    GET_CITIES,
    CREATE_SUPPORT_TASK,
    GET_ALL_USER_TASKS,
    GET_APP_INFO,
    GET_NEW_POSTS,
    GET_PAGES_NUMBER,
    GET_POST_COMMENTS,
    CREATE_POST_COMMENT,
    FILTER_POSTS,
    GET_FAVORITES,
    GET_COMPLAINS,
    SORT_POSTS,
    SHOW_SUCCESS
} from "./types"
import fetch from 'isomorphic-unfetch';
import { authenticationService } from "../../_services";

// T E S T 
export function createPost(post: any): any {
    return {
        type: TEST_CREATE_POST,
        payload: post
    }
};
export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}
export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}
export function showAlert(text: string): any {
    return (dispatch: Function) => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })
        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}
export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}
export function fetchPosts(): any {
    return {
        type: TEST_REQUEST_POSTS
    }
};
export const getAllPosts = () => async (dispatch: Function) => {
    const response = await fetch(`https://intim-vibe-api.padilo.pro/api/posts`);
    const promise = response.json();
    promise.then(res => {
        dispatch({ type: GET_PAGES_NUMBER, payload: res.last_page });
        dispatch({ type: GET_ALL_POSTS, payload: res.data });
    }).catch(err => console.error('Error: ', err));
}
export const getNewPosts = () => async (dispatch: Function) => {
    const response = await fetch(`https://intim-vibe-api.padilo.pro/api/posts/all/new`);
    const promise = response.json();
    promise.then(res => {
        return dispatch({ type: GET_NEW_POSTS, payload: res.data });
    }).catch(err => console.error('Error: ', err));
}
export const getLocationsInfo = () => async (dispatch: Function) => {
    const response = await fetch(`https://intim-vibe-api.padilo.pro/api/location`);
    const promise = response.json();
    promise.then(res => {
        return dispatch({ type: GET_LOCAITONS_INFO, payload: res.data });
    }).catch(err => console.error('Error: ', err));
}
export const getAppInfo = () => async (dispatch: Function) => {
    const response = await fetch(`https://intim-vibe-api.padilo.pro/api/info`);
    const promise = response.json();
    promise.then(res => {
        console.log(res)
        // return dispatch({ type: GET_APP_INFO, payload: res.data });
    }).catch(err => console.error('Error: ', err));
}
export const getCities = (stateId: number | string) => async (dispatch: any) => {
    const response = await fetch(`https://intim-vibe-api.padilo.pro/api/location/cities/${stateId}`);
    const promise = response.json();
    promise.then(res => {
        return dispatch({ type: GET_CITIES, payload: res.data });
    }).catch(err => console.error('Error: ', err));
}
export const createSupportTask = (task: any) => async (dispatch: Function) => {
    const user = authenticationService.currentUserValue;
    const response = await fetch(`https://intim-vibe-api.padilo.pro/api/support/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `${user.token_type} ${user.token}`
        },
        body: JSON.stringify(task)
    });
    const promise = response.json();
    promise.then(res => console.log(res))
        .catch(err => console.error('Error: ', err));
    return dispatch({ type: CREATE_SUPPORT_TASK, payload: task })
}
export const getAllUsersTasks = () => async (dispatch: Function) => {
    const user = await authenticationService.currentUserValue;
    const response = await fetch(`https://intim-vibe-api.padilo.pro/api/support/${user.user.id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `${user.token_type} ${user.token}`
        }
    });
    const promise = response.json();
    promise.then(res => {
        return dispatch({ type: GET_ALL_USER_TASKS, payload: res });
    }).catch(err => console.error('Error: ', err));
}
export const selectPostsPage = (page: number | string) => async (dispatch: Function) => {
    const response = await fetch(`https://intim-vibe-api.padilo.pro/api/posts?page=${page}`);
    const promise = response.json();
    promise.then(res => {
        dispatch({ type: GET_PAGES_NUMBER, payload: res.last_page });
        dispatch({ type: GET_ALL_POSTS, payload: res.data });
    }).catch(err => console.error('Error: ', err));
}
export const getPostComments = (postId: number | string) => async (dispatch: Function) => {
    const user = await authenticationService.currentUserValue;
    const response = await fetch(`https://intim-vibe-api.padilo.pro/api/posts/${postId}/comments`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `${user.token_type} ${user.token}`
        }
    });
    const promise = response.json();
    promise.then(res => {
        dispatch({ type: GET_POST_COMMENTS, payload: res.data });
    }).catch(err => console.error('Error: ', err));;
}
export const createPostComment = (postId: number | string, comment: string) => async (dispatch: Function) => {
    const user = await authenticationService.currentUserValue;
    const response = await fetch(`https://intim-vibe-api.padilo.pro/api/posts/${postId}/comments/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `${user.token_type} ${user.token}`
        },
        body: JSON.stringify({ comment })
    });
    const promise = response.json();
    promise.then(res => {
        dispatch({ type: CREATE_POST_COMMENT, payload: res.data });
    }).catch(err => console.error('Error: ', err));;
}
export const filterPosts = (filterItemsObject: any) => async (dispatch: Function) => {
    // from, to, gender, ethnicity_id, hair_id, eye_id, category_id, affiliation_id, availability_ids(array), availableto_ids(array)
    const response = await fetch(`https://intim-vibe-api.padilo.pro/api/filter`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(filterItemsObject)
    });
    const promise = response.json();
    return promise.then(res => {
        dispatch({ type: GET_PAGES_NUMBER, payload: res.last_page });
        dispatch({ type: FILTER_POSTS, payload: res.data.data });
    }).catch(err => console.error('Error: ', err));;
}
export const reportPost = (postId: number | string, message: string) => async (dispatch: Function) => {
    const user = authenticationService.currentUserValue;
    return await fetch(`https://intim-vibe-api.padilo.pro/api/${postId}/complaints/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `${user.token_type} ${user.token}`
        },
        body: JSON.stringify({
            message, status: 'In progress'
        })
    });
    // const promise = response.json();
    // return promise.then(res => {
    //     dispatch({ type: REPORT_POST });
    // });
}
export const addToFavorites = (postId: number | string) => async (dispatch: Function) => {
    const user = authenticationService.currentUserValue;
    return await fetch(`https://intim-vibe-api.padilo.pro/api/posts/${postId}/favorites/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `${user.token_type} ${user.token}`
        },
        body: JSON.stringify({
            is_favorite: true
        })
    });
}
export const addToFavoritesBusiness = (postId: number | string) => async (dispatch: Function) => {
    const user = authenticationService.currentUserValue;
    return await fetch(`https://intim-vibe-api.padilo.pro/api/posts/${postId}/favorites_business/add`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `${user.token_type} ${user.token}`
        }
    });
}
export const getFavoritesBusiness = () => async (dispatch: Function) => {
    const user = authenticationService.currentUserValue;
    const response = await fetch(`https://intim-vibe-api.padilo.pro/api/favorites_business/my`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `${user.token_type} ${user.token}`
        }
    });
    const promise = response.json();
    return promise.then(res => {
        return dispatch({ type: GET_FAVORITES, payload: res.data });
    }).catch(err => console.error('Error: ', err));
}
export const getFavoritesUser = () => async (dispatch: Function) => {
    const user = authenticationService.currentUserValue;
    const response = await fetch(`https://intim-vibe-api.padilo.pro/api/favorites/my`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `${user.token_type} ${user.token}`
        }
    });
    const promise = response.json();
    return promise.then(res => {
        return dispatch({ type: GET_FAVORITES, payload: res.data });
    }).catch(err => console.error('Error: ', err));
}
export const getComplains = (userId: number | string) => async (dispatch: Function) => {
    const user = authenticationService.currentUserValue;
    const response = await fetch(`https://intim-vibe-api.padilo.pro/api/posts/complaints/user/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `${user.token_type} ${user.token}`
        }
    });
    const promise = response.json();
    return promise.then(res => {
        return dispatch({ type: GET_COMPLAINS, payload: res.data });
    }).catch(err => console.error('Error: ', err));
}
export const sortPosts = (sortType: string) => async (dispatch: Function) => {
    return dispatch({ type: SORT_POSTS, payload: sortType })
}

export const showSuccess = (text: string) => async (dispatch: Function) => {
    dispatch({ type: SHOW_SUCCESS, payload: text })
    setTimeout(() => {
        dispatch({ type: SHOW_SUCCESS, payload: null })
    }, 3000)
}
