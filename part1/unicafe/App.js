import React, { useState } from 'react'

const Title = ({ title }) => <h1>{title}</h1>
const Statistic = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistics = ({ good, neutral, bad }) => {
  let total = Math.abs(good) + Math.abs(neutral) + Math.abs(bad)
  if (total === 0) {
    return <div>No feedback given</div>
  }
  let average = ((good * 1) + (bad * -1)) / (total)
  let positive = (good / total) * 100 + " %"

  return (
    <>
    <table>
    <tbody>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={total} />
      <Statistic text="average" value={average} />
      <Statistic text="positive" value={positive} />
      </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleAddGood = () => setGood(good + 1)
  const handleAddNeutral = () => setNeutral(neutral + 1)
  const handleAddBad = () => setBad(bad + 1)

  return (
    <div>
      <Title title='give feedback' />
      <Button handleClick={handleAddGood} text='good' />
      <Button handleClick={handleAddNeutral} text='neutral' />
      <Button handleClick={handleAddBad} text='bad' />
      <Title title='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
