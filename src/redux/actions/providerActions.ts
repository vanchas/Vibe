import { ADD_POST, ProviderPost, UPDATE_POST, REMOVE_POST, GET_ALL_POSTS } from "./types"
import fetch from 'isomorphic-unfetch'

export function getAllProviderPost(): any {
  return {
    type: GET_ALL_POSTS
  }
};
export async function addProviderPost(post: any): Promise<any> {
  await fetch('https://intim-vibe-api.padilo.pro/api/posts/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ post })
  })
    .then(res => console.log(res))
    .catch(err => console.log('Error:', err))

  return {
    type: ADD_POST
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

