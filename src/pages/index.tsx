import React, { FC, useState } from 'react'
import { Meetings } from 'types/response'
import CreateMeeting from 'containers/CreateMeeting'

const Home: FC = () => {
  const [meetings, setMeetings] = useState<Meetings>(null)
  return (
    <>
      <CreateMeeting setResponse={setMeetings} />
      {meetings && (<p>{meetings.join_url}</p>)}
    </>
  )
}

export default Home
