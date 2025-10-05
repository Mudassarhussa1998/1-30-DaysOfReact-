import React, { useState } from 'react'
import '../css/convertor.css'

export default function Convertor() {
  // Track both values as strings so we can preserve partial input (e.g. "-", "1.")
  const [celsius, setCelsius] = useState('')
  const [fahrenheit, setFahrenheit] = useState('')
  const [lastChanged, setLastChanged] = useState(null) // 'c' or 'f'
  const [error, setError] = useState('')

  const fmt = (n) => {
    // format number with up to 2 decimal places, remove trailing zeros
    if (Number.isFinite(n)) {
      return parseFloat(n.toFixed(2)).toString()
    }
    return ''
  }

  const handleCelsiusChange = (e) => {
    const v = e.target.value
    setCelsius(v)
    setLastChanged('c')
    setError('')

    if (v === '' || v === '-' || v === '.' || v === '-.') {
      // empty or incomplete input — clear fahrenheit
      setFahrenheit('')
      return
    }

    const n = Number(v)
    if (Number.isNaN(n)) {
      setError('Please enter a valid number')
      setFahrenheit('')
      return
    }

    const f = (n * 9) / 5 + 32
    setFahrenheit(fmt(f))
  }

  const handleFahrenheitChange = (e) => {
    const v = e.target.value
    setFahrenheit(v)
    setLastChanged('f')
    setError('')

    if (v === '' || v === '-' || v === '.' || v === '-.') {
      setCelsius('')
      return
    }

    const n = Number(v)
    if (Number.isNaN(n)) {
      setError('Please enter a valid number')
      setCelsius('')
      return
    }

    const c = ((n - 32) * 5) / 9
    setCelsius(fmt(c))
  }

  const clear = () => {
    setCelsius('')
    setFahrenheit('')
    setLastChanged(null)
    setError('')
  }

  return (
    <div className="convertor-root">
      <h2>Day 7 — Temperature Converter</h2>
      <p className="convertor-desc">Convert Celsius ↔ Fahrenheit (type in either box)</p>

      <div className="convertor-grid">
        <label className="convertor-label">
          Celsius (°C)
          <input
            className="convertor-input"
            type="text"
            value={celsius}
            onChange={handleCelsiusChange}
            placeholder="e.g. 25"
            inputMode="decimal"
          />
        </label>

        <label className="convertor-label">
          Fahrenheit (°F)
          <input
            className="convertor-input"
            type="text"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            placeholder="e.g. 77"
            inputMode="decimal"
          />
        </label>
      </div>

      {error && <div className="convertor-error">{error}</div>}

      <div className="convertor-actions">
        <button onClick={clear} className="convertor-btn">Clear</button>
        <div className="convertor-note">Last edited: {lastChanged === 'c' ? 'Celsius' : lastChanged === 'f' ? 'Fahrenheit' : '—'}</div>
      </div>
    </div>
  )
}
