import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import ColorButtons from './components/ColorButtons'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App() {
  const [color, setColor] = useState('bg-red-400 text-black p-4 rounded-3xl');

  return (
    <>
      <SignUp></SignUp>
      {/* <h1 className={color}>Tailwind Titorial</h1>
      <br></br>
      <Cards username='MayMar25'></Cards>
      <ColorButtons setColorFunc={setColor}></ColorButtons> */}
    </>
  )
}

export default App
