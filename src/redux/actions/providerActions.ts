import { ADD_POST, ProviderPost, UPDATE_POST, REMOVE_POST, GET_ALL_POSTS } from "./types"

export function getAllProviderPost(): any {
  return {
    type: GET_ALL_POSTS
  }
};
export function addProviderPost(post: ProviderPost): any {
  return {
    type: ADD_POST,
    payload: post
  }
};
export function updateProviderPost(post: ProviderPost): any {
  return {
    type: UPDATE_POST,
    payload: post
  }
};
export function removeProviderPost(id: number | string): any {
  return {
    type: REMOVE_POST,
    payload: id
  }
};

// export function showAlert(text: string): any {
//     return (dispatch: Function) => {
//         dispatch({
//             type: SHOW_ALERT,
//             payload: text
//         })
//         setTimeout(() => {
//             dispatch(hideAlert())
//         }, 3000)
//     }
// }

