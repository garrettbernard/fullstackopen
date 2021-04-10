import React from 'react'
import Course from './components/Course'

const App = ({ courses }) => {
  return (
    <div>
    <h1>Wed development curriculum</h1>
    {courses.map(course =>
      <Course key={course.id} name={course.name} parts={course.parts} />
    )}
   </div>
 )
}

export default App
