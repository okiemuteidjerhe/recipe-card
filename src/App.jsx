import './App.css'
import Image from './Image.jsx'
import Intro from "./Intro.jsx"
import Instructions from "./Instructions.jsx"
import Nutrition from './Nutrition.jsx'

function App() {
  return (
    <div className='card'>
      <Image/>
      <Intro/>
      <Instructions/>
      <Nutrition/>
    </div>
  )
}

export default App
