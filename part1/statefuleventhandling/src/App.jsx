import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleIncrease = () => setCounter(counter + 1)
  const handleDecrease = () => setCounter(counter - 1)
  const handleReset = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>

      <Button
        onClick={handleIncrease}
        text='plus'
      />

      
      <Button
        onClick={handleReset}
        text='zero'
      />     
      <Button
        onClick={handleDecrease}
        text='minus'
      />           
    </div>
  )
}

export default App

/*
Let's go over the main principles of how an application works once more.

When the application starts, the code in App is executed. This code uses a useState hook to create the application state, setting an initial value of the variable counter. This component contains the Display component - which displays the counter's value, 0 - and three Button components. The buttons all have event handlers, which are used to change the state of the counter.

When one of the buttons is clicked, the event handler is executed. The event handler changes the state of the App component with the setCounter function. Calling a function that changes the state causes the component to re-render.

So, if a user clicks the plus button, the button's event handler changes the value of counter to 1, and the App component is re-rendered. This causes its subcomponents Display and Button to also be re-rendered. Display receives the new value of the counter, 1, as props. The Button components receive event handlers which can be used to change the state of the counter.
*/