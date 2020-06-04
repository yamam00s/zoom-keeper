import React, { FC } from 'react'
import axios from 'axios'
import { Meetings } from 'types/response'
import Button from "components/Button"

const CreateMeeting: FC = () => {

  const createMeeting: () => Promise<Meetings> = async() => {
    return axios.get('https://1is96ypi36.execute-api.ap-northeast-1.amazonaws.com/prod')
  }

  return (
    <Button event={createMeeting}>
      会議を開始
    </Button>
  )
}

export default CreateMeeting
