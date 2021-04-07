import React, { useState } from 'react'

const Title = ({ title }) => <h1>{title}</h1>
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Leading = ({ voteArray, anecdotes }) => {
  const m2 = voteArray.map((value, index) => value + " " + anecdotes[index])
  const m3 = m2.sort();
  const leader = m3[m3.length - 1]
  const count = leader.charAt(0);
  const leader2 = leader.substring(2);
  return (
    <div>
      <div>{leader2}</div>
      <div>has {count} votes</div>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [randomnumber, resetNumber] = useState(0)
  const [votes, setVote] = useState([0, 0, 0, 0, 0, 0])

  const nextRandomAnecdote = () => {
    let random = Math.floor(Math.random() * 6)
    resetNumber(random)
    setSelected(random)
  }

  const addVote = ({ selected }) => {
    const copy = [...votes]
    copy[randomnumber] +=1
    setVote(copy)
  }

  return (
    <div>
      <Title title='Anecdote of the day' />
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button handleClick={addVote} selected={anecdotes[selected]} text='vote' />
      <Button handleClick={nextRandomAnecdote} text='next anecdote' />
      <Title title='Anecdote with most votes' />
      <Leading voteArray={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App
