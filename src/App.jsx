import './App.css'
import { Route ,Routes } from 'react-router-dom'
import SignUp from "./SignUp"
import Home from "./Home"


function App() {
  
  return (
    <Routes>
        <Route  path='/' element={<SignUp/>}/>
        <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}

export default App
