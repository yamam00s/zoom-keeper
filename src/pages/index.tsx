import React, { FC, useState, useEffect } from 'react'
import { Meetings } from 'types/response'
import CreateMeeting from 'containers/CreateMeeting'
import CountDown from 'containers/CountDown'

const Home: FC = () => {
  const [meeting, setMeeting] = useState<Meetings>(null)
  const [isBreak, setIsBreak] = useState(false)
  const [isNotification, setIsNotification] = useState(false)

  const countDown = {
    // 40分
    totalTime: 2400,
    // 37分後
    breakTime: 180,
    setIsBreak,
    meeting
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
      {meeting &&  <CountDown countDownProps={countDown} />}
      <CreateMeeting createMeetingProps={createMeeting} />
      {meeting && (
        <div className="link-button">
          <a href={meeting.join_url} target="_blank">{meeting.join_url}</a>
        </div>
      )}
    </>
  )
}

export default Home
