import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  return (
    <div>
      <div>
          <h2> Who's that player? </h2>
          <h3>
            You might think as yourself as a basketball or NBA fan but if you dont know who these players are then are you really?
            put yourself to the test with the top 10 most known NBA players.
          </h3>
          <h4> Number of Players: {count} </h4>
      </div>
    </div>
  )
}

export default App
