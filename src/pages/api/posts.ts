import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'isomorphic-unfetch'

export default async function getAllPosts(req: NextApiRequest, res: NextApiResponse) {
  console.log(111);
  
  // res.json({ hello: 'world', method: req.method });
  // res.json(
  // await fetch('https://intim-vibe-api.padilo.pro/api/posts/create', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  //   },
  //   body: JSON.stringify({
  //     gender: 'female',
  //     age: 25,
  //     ethnicity: 'some',
  //     hair_color: 'some',
  //     eye_color: 'some',
  //     height: 'some',
  //     affiliation: 'some',
  //     number: '+0123456789',
  //     email: 'some@mail.com',
  //     model_name: 'some',
  //     video_link: 'some',
  //     about: 'some',
  //     available_to: ['some', 'some'],
  //     availability: ['some', 'some'],
  //     summary: 'some',
  //     second_name: 'some',
  //     account_name: 'some',
  //     category: 'some',
  //     //         не обязательные поля:
  //     status: 'other'
  //   })
  // })
  // )
  // .then(res => console.log(res.json()))
  // .catch(err => console.log('Error:', err))
}