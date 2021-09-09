import React from 'react'
import { Hue } from './components/Hue'
import { Saturation } from './components/Saturation'
import { Lightness } from './components/Lightness'

export function App() {
  return (
    <div>
      <aside>
        <p>Color</p>
        <div className="colorBox"></div>
      </aside>
      <ul>
        <li>
          <p>H</p>
          <Hue />
        </li>
        <li>
          <p>S</p>
          <Saturation />
        </li>
        <li>
          <p>L</p>
          <Lightness />
        </li>
      </ul>
    </div>
  )
}
