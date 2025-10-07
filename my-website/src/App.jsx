import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


//components
import { AboutMe } from "./Components/AboutMe";
import { URLshortner } from "./Components/URLshortner";
import { TokenCappture } from "./Components/TokenCappture";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is my website</h1>
      <TokenCappture /><br/>
      <URLshortner /><br/>  
      <AboutMe />   
    </>
  )
}

export default App
