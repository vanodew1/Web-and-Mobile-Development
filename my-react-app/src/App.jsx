import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { Car } from './models/Car';
import './App.css'
import { HybridCar } from './models/HybridCar';

function App() {
  const myCar = new Car('Ferrari', 'SF90 Spider', 2021);
  const myHybridCarPrius = new HybridCar('Toyota', 'Prius', 2024, 'Hybrid', '8 kWh');
  const myHybridCarVolt = new HybridCar('Chevrolet', 'Volt', 2024, 'Hybrid', '18 kWh');
  return (
    <div>
      {/* <h2>Car Details</h2>
      { <p>{myCar.info()}</p> }
      {<p>{myHybridCarPrius.info()}</p>}
      {<p>{myHybridCarVolt.info()}</p>} */}
      <h2>Fruits List</h2>
      <FruitList />

      <h2>Cart Items</h2>
      <CartItemList />
      <UserProfile name = "XYZ Resource" role="Project Manager" project="Project Alpha" />
    </div>
  );
}

export default App
