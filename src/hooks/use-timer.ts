import { useState, useEffect } from 'react'

const useTimer = (totalTime: number) => {
  const [timeLeft, setTimeLeft] = useState(totalTime)

  useEffect(() => {
    if (!timeLeft) return

    const countDown = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearInterval(countDown)
  }, [timeLeft])

  return timeLeft
}

export default useTimer
