import { TEST_CREATE_POST, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, TEST_REQUEST_POSTS, GET_CATEGORIES } from "./types"
import fetch from 'isomorphic-unfetch';

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
export const getCategories = () => async (dispatch: any) => {
    const response = await fetch('https://intim-vibe-api.padilo.pro/api/categories');
    const promise = response.json();
    promise.then(res => {
        // console.log('categories from action:', res.data);
        return { type: GET_CATEGORIES, payload: res.data };
    });
}
