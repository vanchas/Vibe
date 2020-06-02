import { TEST_CREATE_POST, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, TEST_REQUEST_POSTS } from "./types"

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

