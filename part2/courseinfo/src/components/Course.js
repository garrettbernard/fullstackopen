import React from 'react'

const Header = ({ course }) => <h2>{course}</h2>
const Part = ({ name, exercises }) => <p>{name} {exercises}</p>

const Total = ({ parts }) => {
  const addExercises = parts.reduce((totalExercises, part) => totalExercises + part.exercises, 0);
  return (
    <div style={{fontWeight: 'bold'}}>total of {addExercises} exercises</div>
  )
}


const Course = ({ name, parts }) => {
  return (
    <div>
      <Header course={name} />
      {parts.map(part =>
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}
        <Total parts={parts} />
    </div>
  )
}

export default Course
