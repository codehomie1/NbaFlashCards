import { useState } from 'react'
import './App.css'

function App() {


  // count to increment count of keyArr
  const [count, setCount] = useState(0);

  // setext and text for each card will be handled here
  const [text, setText] = useState("Click the arrow to Start");


  function handleClick() {
    // flip card
  }



  return (
    <div>
      <div>
        <h2> Who's That Player? </h2>
        <h3>
          Test yourself to see if you know the top 10 most popular nba players.
        </h3>
        <h4> Number of Players: 10 </h4>
        <br />
        <div className='card'>
          <div className='front'>{text}</div>
          <div className='back'></div>
        </div>
        <button type="next" className='nextCard'>➡</button>
      </div>
    </div>
  )
}

export default App
