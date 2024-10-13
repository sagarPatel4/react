import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(15)
  let [msg, setMsg] = useState("")

  const addValue = () => {

    console.log("conter" + counter);
    counter = counter + 1

    if (counter <= 20) {
      setCounter(counter)
      setMsg("")
    } else {
      counter = 20
      setMsg("you can not add more than 20 number")
    }

  }

  const removeValue = () => {

    console.log("removevalue" + msg);
    counter = counter - 1

    if (counter > 0) {
      setCounter(counter)
      setMsg("")
    } else {
      counter = 0
      setMsg("not possible to minus from zero")
    }

  }
  return (
    <>
      <h1>chai aur react | sagar</h1>
      <h2>Counter value :{counter} {msg}</h2>
      <h2>msg:{msg}</h2>

      <button onClick={addValue}>Add value</button>

      <br />
      <button onClick={removeValue}>remove value</button>
    </>

  )
}

export default App
