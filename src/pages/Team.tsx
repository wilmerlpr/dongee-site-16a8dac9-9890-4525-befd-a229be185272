import { motion } from 'framer-motion'
import { User } from 'lucide-react'

const Team = () => {
  const teamMembers = [
    { name: 'Juan Pérez', role: 'Gerente', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'María López', role: 'Experta en Metales', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Carlos Ruiz', role: 'Técnico', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  ]

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-16 tracking-tight"
      >
        Nuestro Equipo
      </motion.h1>
      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300"
          >
            <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-300 mb-4">{member.role}</p>
            <User className="mx-auto text-blue-400 w-6 h-6" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Team
