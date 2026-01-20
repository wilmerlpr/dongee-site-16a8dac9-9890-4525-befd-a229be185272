import { motion } from 'framer-motion'
import { Star, Users, Hammer, Truck } from 'lucide-react'
import { useEffect, useState } from 'react'
import { supabase } from '../supabase'

interface Testimonial {
  id: number
  name: string
  comment: string
  rating: number
  avatar: string
}

const Home = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    const { data } = await supabase.from('app_16a8d_testimonials').select('*')
    if (data) setTestimonials(data)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-900/20 to-purple-900/20"></div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center z-10 max-w-4xl px-6"
        >
          <h1 className="text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Ferromateriales
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Tu socio confiable en materiales metálicos y herramientas de calidad superior.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
          >
            Explora Nuestros Productos
          </motion.button>
        </motion.div>
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Ferretería"
          className="absolute bottom-0 left-0 w-full h-1/2 object-cover opacity-20"
        />
      </section>

      {/* Services Summary */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="glass p-6 rounded-2xl text-center">
            <Hammer className="mx-auto mb-4 text-blue-400 w-12 h-12" />
            <h3 className="text-2xl font-semibold mb-2">Herramientas</h3>
            <p className="text-gray-300">Amplia variedad de herramientas profesionales.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass p-6 rounded-2xl text-center">
            <Truck className="mx-auto mb-4 text-purple-400 w-12 h-12" />
            <h3 className="text-2xl font-semibold mb-2">Entregas</h3>
            <p className="text-gray-300">Entrega rápida a todo el país.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass p-6 rounded-2xl text-center">
            <Users className="mx-auto mb-4 text-green-400 w-12 h-12" />
            <h3 className="text-2xl font-semibold mb-2">Asesoría</h3>
            <p className="text-gray-300">Expertos listos para ayudarte.</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <h2 className="text-4xl font-bold text-center mb-16">Lo Que Dicen Nuestros Clientes</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="glass p-6 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="fill-yellow-400 text-yellow-400 w-5 h-5" />)}
              </div>
              <p className="mb-4 text-gray-300">{t.comment}</p>
              <div className="flex items-center">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full mr-4" />
                <span className="font-semibold">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
