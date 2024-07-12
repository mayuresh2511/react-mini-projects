import { useState } from 'react'

function App() {
  let [color, setColor] = useState('olive');
  return (
    <>
      <div className='w-full h-screen duration-200'
        style={{backgroundColor: color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-24 inset-x-0 px-2'>
          <dev className='flex flex-wrap justify-center gap-3 bg-white px-2 py-3 rounded-2xl'>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl'
              style={{backgroundColor: "red"}}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl'
              style={{backgroundColor: "yellow"}}
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl'
              style={{backgroundColor: "green"}}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl'
              style={{backgroundColor: "blue"}}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl'
              style={{backgroundColor: "olive"}}
              onClick={() => setColor("olive")}
            >
              Olive
            </button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl'
              style={{backgroundColor: "grey"}}
              onClick={() => setColor("grey")}
            >
              Grey
            </button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl'
              style={{backgroundColor: "purple"}}
              onClick={() => setColor("purple")}
            >
              Purple
            </button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl'
              style={{backgroundColor: "black"}}
              onClick={() => setColor("black")}
            >
              Black
            </button>
          </dev>
        </div>
      </div>
    </>
  )
}

export default App
