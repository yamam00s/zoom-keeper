import fetch, { RequestInit } from 'node-fetch'
import { userId } from './token'
import { CreateMeetingBody } from './types'

const postMeeting = async (jwtToken: string) => {
  const createMeetingBody: CreateMeetingBody = {
    topic: 'string',
    type: 1,
    timezone: 'Asia/Tokyo',
    settings: {
      use_pmi: true
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
  const result = await fetch(`https://api.zoom.us/v2/users/${userId}/meetings`, options)

  return result
}

export default postMeeting
