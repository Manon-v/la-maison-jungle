import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Housing from '../pages/Housing'
import Error from '../pages/Error'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/housing/:id" element={<Housing />} />
      
      
      <Route path="/404" element={<Error />} />
      
     
      <Route path="*" element={<Error />} />
    </Routes>
  )
}