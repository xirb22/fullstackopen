import { useState } from 'react'

const StatisticsLine = ({text, value}) => {
   return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
   )
}
const Statistics = ({good, neutral, bad}) => {

  if(!(good || neutral || bad)) {
    return(
      <div>
        <h1>Statistics</h1>
      <p>No feedback given</p>
      </div>
    )
  }
  
  return(
    <div>
      <h1>Statistics:</h1>
      <StatisticsLine text="Good" value ={good} />
      <StatisticsLine text="Neutral" value ={neutral} />
      <StatisticsLine text="Bad" value ={bad} />
      <StatisticsLine text="All" value ={good + neutral + bad} />
      <StatisticsLine text="Average" value ={(good-bad)/(good+neutral+bad)} />
      <StatisticsLine text="Positive" value ={100*good/(good+neutral+bad) + "%"} />
    </div>
  )
}


const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" handleClick={() => setGood(good + 1)}/>
      <Button text="Neutral" handleClick={() => setNeutral(neutral + 1)}/>
      <Button text="Bad" handleClick={() => setBad(bad + 1)}/>

      <Statistics  good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App