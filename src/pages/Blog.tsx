import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { supabase } from '../supabase'

interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  image: string
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const { data } = await supabase.from('app_16a8d_blog_posts').select('*')
    if (data) setPosts(data)
  }

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-16 tracking-tight"
      >
        Blog
      </motion.h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <span className="text-sm text-gray-400">{post.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Blog
