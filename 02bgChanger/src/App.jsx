import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  const [color1, setColor1] = useState("white")
  return (
    <div className="w-full h-screen duration-500"
      style={{ backgroundColor: color }}
    >
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "red" }}
          >Red</button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >Green</button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "blue" }}
          >Blue</button>
        </div>
      </div>

      <div className=" h-screen   flex  items-center justify-center " >

        <div className="  flex rounded-md px-5 py-1 justify-start gap-2" style={{ backgroundColor: color1 }}>

          <button className="bg-green-300 outline-none px-2 text-black rounded-md  "
            onClick={() => setColor1("green")}>
            red
          </button>

          <button className="bg-purple-400 outline-none px-2 text-black rounded-md  "
            onClick={() => setColor1("purple")}>
            red
          </button>

          <button className="bg-orange-300 outline-none px-2 text-black rounded-md  "
            onClick={() => setColor1("orange")}>
            red
          </button>

        </div>

      </div>
    </div>
  )
}

export default App
