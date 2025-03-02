
const Hello = (props) => {
  console.log(props)
  return (
    <div >
      <p>Hello {props.name}, you are {props.age} years old!</p>
    </div>
  )
}



const App = () => {
  
  console.log('Hello from component App')

  const now = Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  const friends = [
    {name: "Peter", age: 4},
    {name: "Maya", age: 10}
  ]

  const friendarray = ["Bob", "Sarah"]


  return (
    <div>
      <h1>Friends</h1>
      {/* <p>{friends[0]}</p>   This throws an error, because friends[0] is an object and values evaluated in the curly braces need to be primitive values (e.g. int, string)*/}
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{friendarray}</p> 

      <h1>Greetings</h1>
      <Hello name = "George" age = {26 + 10} />
      <Hello name = "Daisy" age = {12} />
      <p>{a} + {b} = {a+b}</p>
    </div>
  )
}

export default App