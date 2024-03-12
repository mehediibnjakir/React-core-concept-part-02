// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import Counter from './assets/Counter'
import Friends from './assets/Friends'

import Team from './assets/Team'
import User from './assets/User'


function App() {
  function handelClick() {
    alert('Button Clicked')
  }
  const handelClick2 = () => {
    alert('button clilecked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h1>React Core concept 02</h1>

      <Friends></Friends>

      <User>  </User>

      <Team></Team>
      <Counter></Counter>

      <button onClick={handelClick}>Click Me</button>
      <button onClick={handelClick2}>Click 2</button>
      <button onClick={() => { alert('third click') }}>Click 3</button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
