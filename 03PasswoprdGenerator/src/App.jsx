import { useState, useCallback, useEffect ,useRef} from 'react'

function App() {
  const [length, setLength] = useState(6)
  const [isNumber, setIsNumber] = useState(false)
  const [isChar, setIsChar] = useState(false)
  const [password, setPassword] = useState("")


  // useRef Hook
  const passwordRef = useRef(null)

  // method ==>1

  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (isNumber) str += "0123456789"
    if (isChar) str += "!@#$%^&*()_+=-/"

    for (let i = 0; i < length; i++) {

      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, isNumber, isChar, setPassword])

  useEffect(() => { passwordGenerator() }, [length, isNumber, isChar, passwordGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  }, [password])

  // method ==>2
  // useEffect(() => {
  //   let pass = ""
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  //   if (isNumber) str += "0123456789"
  //   if (isChar) str += "!@#$%^&*()_+=-/"

  //   for (let i = 0; i < length; i++) {

  //     let char = Math.floor(Math.random() * str.length + 1)

  //     pass += str.charAt(char)
  //   }

  //   setPassword(pass)
  // }, [length, isNumber, isChar])


  return (
    <>
      <div className='w-full max-w-md m-auto 
           shadow-md rounded-lg px-4 my-8 py-3
            text-orange-500 bg-gray-700'>

        <h1 className='text-white text-center'>
          Password generator
        </h1>

        <div className=' flex shadow 
             mt-3 rounded-lg overflow-hidden  mb-4'>

          <input
            type="text"
            value={password}
            className='items-center outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
          ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            className=' bg-blue-500
           text-white px-2 
            outline-none shrink-0 hover:bg-purple-400 duration-300 active:bg-red-400'>
            Copy
          </button>
          
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }} />
            <label >Length:{length}</label>
          </div>

          <div className='flex items-center gap-x-1 '>
            <input type="checkbox"
              defaultValue={isNumber}
              id="numberInput"
              onChange={() => { setIsNumber((prev) => !prev) }} />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div className='flex items-center gap-x-1 '>
            <input type="checkbox"
              defaultValue={isChar}
              id="characterInput"
              onChange={() => { setIsChar((prev) => !prev) }} />
            <label htmlFor="numberInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
