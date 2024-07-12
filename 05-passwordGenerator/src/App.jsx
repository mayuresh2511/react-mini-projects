import { useRef } from "react";
import { useEffect } from "react";
import { useCallback, useState } from "react"


function App() {
  const [length, setLength] = useState(8)
  const [isNumbersAllowed, setIsNumbersAllowed] = useState(false)
  const [isSpecialCharsAllowed, setIsSpecialCharsAllowed] = useState(false)
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (isNumbersAllowed) str += "0123456789"
    if (isSpecialCharsAllowed) str += "!@#$%^&*()[]{}+_="

    for (let i = 0; i < length; i++){
      let index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)
    }

    setPassword(pass)
  }, [length, isNumbersAllowed, isSpecialCharsAllowed, setPassword])

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  })

  useEffect(passwordGenerator, [length, isNumbersAllowed, isSpecialCharsAllowed, passwordGenerator]);

  return (
    <>
      <div className='flex flex-wrap w-full h-screen duration-200 justify-center'
        style={{backgroundColor: "black"}}
      >
        <div className="fixed top-20 w-full max-w-md mx-auto shadow-lg rounded-xl px-4 py-8
         text-orange-400 bg-gray-800">
          <h1 className='text-center my-3'>Password generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
                type="text"
                value={password}
                className="outline-none w-full py-1 px-3"
                placeholder="Password"
                readOnly
                ref={passwordRef}
            />
            <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyToClipboard}
            >copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
                />
                <label>Length: {length}</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  defaultChecked={isNumbersAllowed}
                  id="numberInput"
                  onChange={() => {
                      setIsNumbersAllowed((prev) => !prev);
                  }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  defaultChecked={isSpecialCharsAllowed}
                  id="characterInput"
                  onChange={() => {
                      setIsSpecialCharsAllowed((prev) => !prev )
                  }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
