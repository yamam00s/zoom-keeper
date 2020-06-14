import React, { FC, useState, useEffect } from 'react'
import { Meetings } from 'types/response'
import CreateMeeting from 'containers/CreateMeeting'
import CountDown from 'containers/CountDown'

const Home: FC = () => {
  const [meeting, setMeeting] = useState<Meetings>(null)
  const [isBreak, setIsBreak] = useState(false)
  const [isNotification, setIsNotification] = useState(false)

  const countDown = {
    // 2時間
    totalTime: 7200,
    // 37分（3分前）
    breakTime: 2280,
    setIsBreak
  }

  const createMeeting = {
    setMeeting,
    isNotification
  }

  useEffect(() => {
    Notification.requestPermission()
    if (Notification.permission === 'granted') {
      setIsNotification(true)
    }
  }, [])

  useEffect(() => {
    if (isNotification && isBreak) {
      new Notification('残り3分です。新規ミーティングを作成しましょう。')
    }
    setIsBreak(false)
  }, [isBreak])

  return (
    <>
      <CountDown countDownProps={countDown} />
      <CreateMeeting createMeetingProps={createMeeting} />
      {meeting && (<a href="`${meeting.join_url}`">{meeting.join_url}</a>)}
    </>
  )
}

export default Home
