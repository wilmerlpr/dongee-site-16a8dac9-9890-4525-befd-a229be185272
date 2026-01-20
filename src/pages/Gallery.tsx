import { motion } from 'framer-motion'
import { Image } from 'lucide-react'

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1581093450028-0db5b0f500c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1581093450028-0db5b0f500c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  ]

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-16 tracking-tight"
      >
        Galería de Productos
      </motion.h1>
      <div className="grid md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="glass rounded-xl overflow-hidden cursor-pointer"
          >
            <img src={img} alt="Producto" className="w-full h-64 object-cover" />
            <div className="p-4">
              <Image className="w-6 h-6 text-gray-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
