// import express from "express"
import fetch,  { RequestInit } from 'node-fetch'
// import cors from 'cors'
import { userId, jwtToken } from './token'

// const app = express();

// app.use(cors())

// app.get('/', async (req, res) => {
//   const options = {
//     method: 'POST',
//     body:    JSON.stringify(body),
//     headers: { 'Content-Type': 'application/json' },
//   }
//   fetch(`https://api.zoom.us/v2/users/${userId}/meetings`)
//   res.send('Hello World!')
// })

// app.listen(3000, () => console.log('Example app listening on port 3000!'))

const localTest = async () => {
  const createMeetingBody = {
    topic: "string",
    type: "2",
    start_time: "2020-04-27T15:30:30",
    timezone: "Asia/Tokyo",
    setting: {
      "use_pmi": false
    }
  }
  const options: RequestInit = {
    body: JSON.stringify(createMeetingBody),
    method: 'POST',
    headers: {
      'User-Agent': 'Zoom-Jwt-Request',
      'content-type': 'application/json',
      authorization: `Bearer ${jwtToken}`
    },
  }
  await fetch(`https://api.zoom.us/v2/users/${userId}/meetings`, options)
}

localTest()
