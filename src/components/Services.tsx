import { motion } from 'framer-motion';
import { Settings, Wrench, Car, Shield, Clock } from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: 'Maintenance Service',
    description: 'Regular maintenance and servicing to keep your vehicle in perfect condition'
  },
  {
    icon: Wrench,
    title: 'Repair Services',
    description: 'Expert repair services for all makes and models'
  },
  {
    icon: Car,
    title: 'Custom Modifications',
    description: 'Personalize your vehicle with our custom modification services'
  },
  {
    icon: Shield,
    title: 'Extended Warranty',
    description: 'Comprehensive warranty packages for peace of mind'
  },
  {
    icon: Clock,
    title: '24/7 Roadside Assistance',
    description: 'Round-the-clock emergency assistance whenever you need it'
  },
  {
    icon: Wrench,
    title: 'Parts Replacement',
    description: 'Genuine parts replacement and upgrades for all vehicles'
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive automotive services to keep your vehicle running at its best
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}