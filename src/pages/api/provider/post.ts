import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'isomorphic-unfetch'

export default async function handle(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  // return await fetch('https://jsonplaceholder.typicode.com/todos')
  return await fetch(`https://intim-vibe-api.padilo.pro/api/posts/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      'gender': 'female',
      'age': '25',
      'ethnicity': 'some',
      'hair_color': 'some',
      'eye_color': 'some',
      'height': 'some',
      'affiliation': 'some',
      'number': '+0123456789',
      'email': 'some@mail.com',
      'model_name': 'some',
      'video_link': 'some',
      'about': 'some',
      'available_to': ['some', 'some'],
      'availability': ['some', 'some'],
      'summary': 'some',
      'second_name': 'some',
      'account_name': 'some',
      'category': 'some',
      'status': 'other'
    })
  })
    .then(res => res.json())
    .then(json => res.send(json))
    .catch((err) => res.send(err));
}
