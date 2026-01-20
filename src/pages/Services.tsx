import { motion } from 'framer-motion'
import { Hammer, Wrench, Scissors } from 'lucide-react'

const Services = () => {
  const services = [
    { icon: Hammer, title: 'Venta de Herramientas', desc: 'Herramientas de marcas líderes para todo tipo de proyectos.' },
    { icon: Wrench, title: 'Corte de Metales', desc: 'Servicio preciso de corte a medida para sus necesidades.' },
    { icon: Scissors, title: 'Materiales Metálicos', desc: 'Hierro, acero y aluminio en diversas formas y tamaños.' },
    { icon: Hammer, title: 'Reparaciones', desc: 'Taller equipado para reparaciones rápidas.' },
  ]

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-16 tracking-tight"
      >
        Nuestros Servicios
      </motion.h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300"
          >
            <service.icon className="mx-auto mb-4 text-blue-400 w-12 h-12" />
            <h3 className="text-2xl font-semibold mb-2 text-center">{service.title}</h3>
            <p className="text-gray-300 text-center">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Services