import { motion } from 'framer-motion'
import { useState } from 'react'
import { supabase } from '../supabase'
import { MapPin, Phone, Mail } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.from('app_16a8d_contacts').insert([formData])
    if (!error) {
      alert('Mensaje enviado!')
      setFormData({ name: '', email: '', message: '' })
    }
    setLoading(false)
  }

  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-16 tracking-tight"
      >
        Contacto
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
          <div className="glass p-6 rounded-xl flex items-center">
            <MapPin className="mr-4 text-blue-400 w-6 h-6" />
            <span>Calle Falsa 123, Ciudad, País</span>
          </div>
          <div className="glass p-6 rounded-xl flex items-center">
            <Phone className="mr-4 text-green-400 w-6 h-6" />
            <span>+1 234 567 890</span>
          </div>
          <div className="glass p-6 rounded-xl flex items-center">
            <Mail className="mr-4 text-purple-400 w-6 h-6" />
            <span>info@ferromateriales.com</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="glass p-8 rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Mensaje"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              {loading ? 'Enviando...' : 'Enviar Mensaje'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
