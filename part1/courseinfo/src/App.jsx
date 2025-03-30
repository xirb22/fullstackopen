const Header = (props) => {

  return (
    <h1>{props.coursename}</h1>
  )

}

const Part = (props) => {

  return (
    <p>{props.partname} {props.exercises}</p>

  )

}

const Content = (props) => {

  return (
    <div>
      <Part partname = {props.parts[0].name} exercises = {props.parts[0].exercises} />
      <Part partname = {props.parts[1].name} exercises = {props.parts[1].exercises} />
      <Part partname = {props.parts[2].name} exercises = {props.parts[2].exercises} />
    </div>
  )

}

const Total = (props) => {

  return (
    <p>Number of exercises {props.total} </p>
  )

}




const App = () => {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header coursename = {course}/>
      <Content parts = {[part1, part2, part3]} />
      <Total total = {part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App