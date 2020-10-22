import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

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
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h2>Statistics</h2>
      <table>
        <tbody>
        <Statistics text="good" value={good} />      
        <Statistics text="neutral" value={neutral} />      
        <Statistics text="bad" value={bad} />      
        <Statistics text="average" value={average} />      
        <Statistics text="positive" value={positive} />  
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)