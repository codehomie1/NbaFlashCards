import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  return (
    <div>
      <div>
          <h2> Who's That Player? </h2>
          <h3>
            You might think as yourself as a basketball or NBA fan but if you dont know who these players are then are you really?
            Put yourself to the test with the top 10 most known NBA players.
          </h3>
          <h4> Number of Players: {count} </h4>
          <br />
          <div className='card'>
             <div className='front'></div>
             <div className='back'></div>
          </div>
          <button type="next" className='nextCard'>➡</button>
      </div>
    </div>
  )
}

export default App
