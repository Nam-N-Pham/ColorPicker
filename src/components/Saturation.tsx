import React, { useState } from 'react'

export function Saturation() {
  const [saturation, setSaturation] = useState(50)

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    const newSaturation = event.target.value

    setSaturation(Number(newSaturation))
  }

  return (
    <input
      type="range"
      min="0"
      max="100"
      step="1"
      value={saturation}
      onChange={handleChangeInput}
    />
  )
}
