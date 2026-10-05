import { Outlet, Link } from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <h1>API CONTEXT</h1>
      <Outlet/>
    </div>
  )
}

export default App