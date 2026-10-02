import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Greeting name="Alice" age={30} />
    <Book title="To Kill a Mocking Bird" author="Harper Lee"></Book>
    <YourCar color="red" brand="Toyota" model="Corolla" registration="ABC-123" />
    <MyCar brand="Ford" />
    <Parent /> */}
    <App />
  </StrictMode>,
)

function Greeting({ name, age}) {
  return <h2 style={{background: 'lightblue'}}>Hello, {name}! You are {age} years old.</h2>;
}

function Book(props) {
  return <h2 style={{background: 'lightgreen'}}>The book title is {props.title}! Author was {props.author}</h2>;
}

function YourCar({color, brand, ...rest}) {
  return (
    <h2 style={{ background: 'lightgray' }}>Your {brand} {rest.model} is {color}! Registration: {rest.registration}</h2>
  );
}

//Set the default color value to "blue"
function MyCar({ color = "blue",brand}) {
  return (
    <h2 style={{ background: 'lightyellow'}}>My car color is {color}, and its brand is {brand}!</h2>
  );
}

//The son component receives the content passed to it as children and displays it.
function Son(props){
  return (
    <div style={{background: 'lightgreen' }}>
      <h2>Son</h2>
      <div>{props.children}</div>
    </div>
  );
}

//The daughter component recieves the content passed to it as children and dsiplays it, along with the education and age properties.
function Daughter(props) {
  return (
    <div style={{background: 'lightblue'}}>
      <h2>Daughter</h2>
      <div>{props.children}</div>
      <br></br>
      <div style={{fontStyle: 'italic', background:'lightgray'}}>And Daughter also has properties : education: {props.education} and age: {props.age}</div>
    </div>
  );
}

function Parent() {
  return (
    <div>
      <h2>My two children</h2>
      <Son>
        <p>
          This was written in the Parent component, but displayed as a aprt of the Son component
        </p>
      </Son>
      <Daughter education="Masters" age="25">
        <p>
          This was written in the Parent component, but displayed as a part of the Daughter component
        </p>
      </Daughter>
    </div>
  )
}
