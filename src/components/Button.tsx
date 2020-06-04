import React, { FC } from 'react'

const Button: FC<{ event: () => Promise<void> }> = ({ event, children }) => (
  <button type="button" onClick={event}>
    {children}
  </button>
)

export default Button
