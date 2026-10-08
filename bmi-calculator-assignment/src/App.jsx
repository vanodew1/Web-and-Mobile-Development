import { useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState('')
  const [feet, setFeet] = useState('')
  const [inches, setInches] = useState('')
  const [result, setResult] = useState('')

  function calculate() {
    if (weight <= 0 || feet <= 0 || inches < 0 || isNaN(weight) || isNaN(feet) || isNaN(inches)) {
      setResult('Please enter valid numbers')
      return
    }

    const totalInches = Number(feet) * 12 + Number(inches)
    const meters = totalInches * 0.0254
    const bmi = weight / (meters * meters)

    let category
    if (bmi < 18.5) {
      category = 'Underweight'
    } else if (bmi < 25) {
      category = 'Normal weight'
    } else if (bmi < 30) {
      category = 'Overweight'
    } else {
      category = 'Obese'
    }

    setResult('Your BMI is ' + bmi.toFixed(1) + ' - ' + category)
  }

  function reset() {
    setWeight('')
    setFeet('')
    setInches('')
    setResult('')
  }

  return (
    <div className="app">
      <h1>BMI Calculator</h1>

      <p>Weight (kg)</p>
      <input value={weight} onChange={(e) => setWeight(e.target.value)} />

      <p>Height (feet and inches)</p>
      <input value={feet} onChange={(e) => setFeet(e.target.value)} /> ft
      <input value={inches} onChange={(e) => setInches(e.target.value)} /> in

      <br />
      <br />
      <button className="calculate-btn" onClick={calculate}>Calculate</button>
      <button onClick={reset}>Reset</button>

      <p>{result}</p>
    </div>
  )
}

export default App
