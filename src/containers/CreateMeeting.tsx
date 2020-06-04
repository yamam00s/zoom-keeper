import React, { FC } from 'react'
import axios from 'axios'
import { Meetings } from 'types/response'
import Button from "components/Button"

const CreateMeeting: FC<{setResponse: React.Dispatch<React.SetStateAction<Meetings>> }> = ({ setResponse}) => {

  const createMeeting = async() => {
    const result = await axios.get<Meetings>('https://1is96ypi36.execute-api.ap-northeast-1.amazonaws.com/prod')
    await setResponse(result.data)
  }

  return (
    <Button event={createMeeting}>
      会議を開始
    </Button>
  )
}

export default CreateMeeting
