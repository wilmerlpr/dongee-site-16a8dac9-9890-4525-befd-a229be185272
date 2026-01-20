import { Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Team from './pages/Team'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background Blobs */}
      <div className="blob">
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tight">Ferromateriales</Link>
          <ul className="hidden md:flex space-x-8">
            <li><Link to="/" className="hover:text-blue-400 transition-colors">Inicio</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Servicios</Link></li>
            <li><Link to="/gallery" className="hover:text-blue-400 transition-colors">Galería</Link></li>
            <li><Link to="/team" className="hover:text-blue-400 transition-colors">Equipo</Link></li>
            <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contacto</Link></li>
          </ul>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <motion.ul initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden mt-4 space-y-2">
            <li><Link to="/" className="block py-2 hover:text-blue-400">Inicio</Link></li>
            <li><Link to="/services" className="block py-2 hover:text-blue-400">Servicios</Link></li>
            <li><Link to="/gallery" className="block py-2 hover:text-blue-400">Galería</Link></li>
            <li><Link to="/team" className="block py-2 hover:text-blue-400">Equipo</Link></li>
            <li><Link to="/blog" className="block py-2 hover:text-blue-400">Blog</Link></li>
            <li><Link to="/contact" className="block py-2 hover:text-blue-400">Contacto</Link></li>
          </motion.ul>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2024 Ferromateriales. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
