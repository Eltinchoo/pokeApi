import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import pokeLogo from './assets/img/pngwing.com.png'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <img src={pokeLogo} alt=""style={{width: "400px"}} />
      <Card/>
     
    </div>
  )
}

export default App
