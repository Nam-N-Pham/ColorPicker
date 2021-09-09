import React, { useState } from 'react'

export function Lightness() {
  const [lightness, setLightness] = useState(50)

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    const newLightness = event.target.value

    setLightness(Number(newLightness))
  }

  return (
    <input
      type="range"
      min="0"
      max="100"
      step="1"
      value={lightness}
      onChange={handleChangeInput}
    />
  )
}
