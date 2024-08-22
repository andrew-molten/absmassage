import { Outlet } from 'react-router-dom'
import NavBar from './components/Nav/NavBar.tsx'
import Footer from './components/Nav/Footer.tsx'

function App() {
  return (
    <div className="space-y-4 pt-6">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
