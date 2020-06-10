import { NextApiRequest, NextApiResponse } from 'next'

export default async function getAllPosts(req: NextApiRequest, res: NextApiResponse) {
  res.json({ hello: 'world', id: req.query.id });
    // await fetch(`https://intim-vibe-api.padilo.pro/api/posts/${req.query.id}`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //   }
    // })
    // .then(res => console.log(res.json()))
    // .catch(err => console.log('Error:', err))
}