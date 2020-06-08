import React, { FC, useEffect } from 'react'
import useTimer from 'hooks/use-timer'
import { secToHour } from 'utils/times'

type CountDownProps = {
  totalTime: number
  breakTime: number
  setIsBreak: React.Dispatch<React.SetStateAction<boolean>>
}

const CountDown: FC<{countDownProps: CountDownProps}> = ({ countDownProps }) => {
  const { totalTime, breakTime, setIsBreak } = countDownProps
  const timeLeft = useTimer(totalTime)
  const { hour, min, sec } = secToHour(timeLeft)

  useEffect(() => {

  }, [timeLeft])

  return <p>{`${hour}:${min}:${sec}`}</p>
}

export default CountDown
