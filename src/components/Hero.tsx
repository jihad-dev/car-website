import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
          alt="Luxury car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Discover Your Perfect Drive
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Experience luxury and performance with our premium selection of vehicles
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Browse Inventory
              </button>
              <button className="px-8 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition backdrop-blur-sm">
                Book Test Drive
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}