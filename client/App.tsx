import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar.tsx'

function App() {
  return (
    <div className="space-y-4 pt-6">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
