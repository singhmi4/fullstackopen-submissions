import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const average = (good + bad + neutral) > 0 ? ((good - bad) / (good + bad + neutral)).toFixed(2) : 0;
  const positive = (good + bad + neutral) > 0 ? ((good / (good + bad + neutral))*100).toFixed(2) : 0;

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>Statistics</h2>
      <p>good <span>{good}</span></p>
      <p>neutral <span>{neutral}</span></p>
      <p>bad <span>{bad}</span></p>
      <p>average <span>{average}</span></p>
      <p>positive <span>{positive} %</span></p>
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)