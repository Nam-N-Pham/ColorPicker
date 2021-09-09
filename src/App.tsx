import React, { useState } from 'react'

export function App() {
  const [hue, setHue] = useState(Math.floor(Math.random() * 361))

  function handleHueChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    const newHue = event.target.value

    setHue(Number(newHue))
  }

  const [saturation, setSaturation] = useState(Math.floor(Math.random() * 101))

  function handleSaturationChangeInput(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    event.preventDefault()

    const newSaturation = event.target.value

    setSaturation(Number(newSaturation))
  }

  const [lightness, setLightness] = useState(Math.floor(Math.random() * 101))

  function handleLightnessChangeInput(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    event.preventDefault()

    const newLightness = event.target.value

    setLightness(Number(newLightness))
  }

  function handleRandomButtonClick() {
    setHue(Math.floor(Math.random() * 361))
    setSaturation(Math.floor(Math.random() * 101))
    setLightness(Math.floor(Math.random() * 101))
  }

  const newBackgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`
  const newStyle = { backgroundColor: newBackgroundColor }

  return (
    <div>
      <aside>
        <p>Color</p>
        <div className="colorBox" style={newStyle}></div>
        <button onClick={handleRandomButtonClick}>Random</button>
      </aside>
      <ul>
        <li>
          <p>H</p>
          <input
            type="range"
            min="0"
            max="360"
            step="1"
            value={hue}
            onChange={handleHueChangeInput}
          />
          <p>{hue}</p>
        </li>
        <li>
          <p>S</p>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={saturation}
            onChange={handleSaturationChangeInput}
          />
          <p>{saturation}</p>
        </li>
        <li>
          <p>L</p>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={lightness}
            onChange={handleLightnessChangeInput}
          />
          <p>{lightness}</p>
        </li>
      </ul>
      <p className="hsl">
        hsl({hue}, {saturation}%, {lightness}%)
      </p>
    </div>
  )
}
