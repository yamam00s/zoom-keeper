import React, { FC, useState, useEffect } from 'react'
import { Meetings } from 'types/response'
import CreateMeeting from 'containers/CreateMeeting'
import CountDown from 'containers/CountDown'

const Home: FC = () => {
  const [meetings, setMeetings] = useState<Meetings>(null)
  const [isBreak, setIsBreak] = useState(false)

  const countDown = {
    // 3時間
    totalTime: 10800,
    // 37分（3分前）
    breakTime: 2280,
    setIsBreak
  }

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    const isNotification = Notification.permission === 'granted'
    if (isNotification && isBreak) {
      new Notification('残り3分です。新規ミーティングを作成しましょう。')
    }
    setIsBreak(false)
  }, [isBreak])

  return (
    <>
      <CountDown countDownProps={countDown} />
      <CreateMeeting setResponse={setMeetings} />
      {meetings && (<p>{meetings.join_url}</p>)}
    </>
  )
}

export default Home
