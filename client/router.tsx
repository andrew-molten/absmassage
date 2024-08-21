/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './App'
import Home from './pages/Home.tsx'
import MassagePrices from './pages/MassagePrices.tsx'
import About from './pages/About.tsx'
import FAQ from './pages/FAQ.tsx'
import Contact from './pages/Contact.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/massage-&-prices" element={<MassagePrices />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
    </Route>,
  ),
)

export default router
