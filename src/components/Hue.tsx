import React, { useState } from 'react'

export function Hue() {
  const [hue, setHue] = useState(180)

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    const newHue = event.target.value

    setHue(Number(newHue))
  }

  return (
    <input
      type="range"
      min="0"
      max="360"
      step="1"
      value={hue}
      onChange={handleChangeInput}
    ></input>
  )
}
