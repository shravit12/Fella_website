import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Creative Design",
      description: "Unique and playful designs that bring joy to every toy.",
      icon: "🎨",
    },
    {
      title: "Customization",
      description: "Personalized options to make each Fella toy truly yours.",
      icon: "⚙️",
    },
    {
      title: "Fast Delivery",
      description: "Quick and reliable shipping to your doorstep.",
      icon: "🚚",
    },
    {
      title: "24/7 Support",
      description: "Friendly customer support whenever you need us.",
      icon: "💬",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>

        {/* Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center shadow-lg border border-white/10 hover:bg-white/20 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
