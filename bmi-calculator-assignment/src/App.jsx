import { useState } from 'react'
import './App.css'

function getError(value, name) {
  if (value === '') return name + ' is required'
  if (isNaN(value)) return name + ' must be a number'
  if (Number(value) <= 0) return name + ' must be greater than 0'
  return ''
}

function getInchesError(value) {
  if (value === '') return ''
  if (isNaN(value)) return 'Inches must be a number'
  if (Number(value) < 0) return 'Inches cannot be negative'
  if (Number(value) >= 12) return 'Inches must be less than 12'
  return ''
}

function App() {
  const [unit, setUnit] = useState('ftin')
  const [weight, setWeight] = useState('')
  const [feet, setFeet] = useState('')
  const [inches, setInches] = useState('')
  const [cm, setCm] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const weightError = getError(weight, 'Weight')
  const feetError = unit === 'ftin' ? getError(feet, 'Feet') : ''
  const inchesError = unit === 'ftin' ? getInchesError(inches) : ''
  const cmError = unit === 'cm' ? getError(cm, 'Height') : ''
  const hasError = weightError || feetError || inchesError || cmError

  let bmi
  let category
  if (!hasError) {
    let meters
    if (unit === 'ftin') {
      meters = (Number(feet) * 12 + Number(inches)) * 0.0254
    } else {
      meters = Number(cm) / 100
    }
    bmi = Math.round((weight / (meters * meters)) * 10) / 10

    if (bmi < 18.5) {
      category = 'Underweight'
    } else if (bmi < 25) {
      category = 'Normal weight'
    } else if (bmi < 30) {
      category = 'Overweight'
    } else {
      category = 'Obese'
    }
  }

  function reset() {
    setWeight('')
    setFeet('')
    setInches('')
    setCm('')
    setSubmitted(false)
  }

  return (
    <div className="app">
      <h1>BMI Calculator</h1>

      <p>Height unit</p>
      <button className={unit === 'ftin' ? 'active' : ''} onClick={() => setUnit('ftin')}>ft / in</button>
      <button className={unit === 'cm' ? 'active' : ''} onClick={() => setUnit('cm')}>cm</button>

      <p>Weight (kg)</p>
      <input value={weight} onChange={(e) => setWeight(e.target.value)} />
      {submitted && weightError && <p className="error">{weightError}</p>}

      {unit === 'ftin' ? (
        <>
          <p>Height (feet and inches)</p>
          <input value={feet} onChange={(e) => setFeet(e.target.value)} /> ft
          <input value={inches} onChange={(e) => setInches(e.target.value)} /> in
          {submitted && feetError && <p className="error">{feetError}</p>}
          {submitted && inchesError && <p className="error">{inchesError}</p>}
        </>
      ) : (
        <>
          <p>Height (cm)</p>
          <input value={cm} onChange={(e) => setCm(e.target.value)} /> cm
          {submitted && cmError && <p className="error">{cmError}</p>}
        </>
      )}

      <br />
      <br />
      <button className="calculate-btn" onClick={() => setSubmitted(true)}>Calculate</button>
      <button onClick={reset}>Reset</button>

      {submitted && !hasError && <p>Your BMI is {bmi.toFixed(1)} - {category}</p>}
    </div>
  )
}

export default App
