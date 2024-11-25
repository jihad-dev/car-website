import { motion } from 'framer-motion';

const cars = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    price: "$95,000",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80",
    specs: "4.0L V8 • 496 HP • AWD"
  },
  {
    id: 2,
    name: "BMW M5 Competition",
    price: "$103,500",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80",
    specs: "4.4L V8 • 617 HP • AWD"
  },
  {
    id: 3,
    name: "Audi RS7 Sportback",
    price: "$118,500",
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80",
    specs: "4.0L V8 • 591 HP • Quattro"
  }
];

export default function FeaturedCars() {
  return (
    <section id="inventory" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Vehicles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of premium vehicles, each offering exceptional performance and luxury
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{car.name}</h3>
                <p className="text-gray-600 mb-4">{car.specs}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{car.price}</span>
                  <button className="px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-blue-600 transition">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}