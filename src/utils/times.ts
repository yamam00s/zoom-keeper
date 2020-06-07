export const secToHour = (time: number) => {
  const sec = zeroPadding((time % 60) % 60, 2)
  const min = zeroPadding(Math.floor(time / 60) % 60, 2)
  const hour = zeroPadding(Math.floor(time / 3600) % 24, 2)

  return { hour, min, sec }
}

const zeroPadding = (num: number, length: number) => {
  return `00000${num}`.slice(-length)
}
