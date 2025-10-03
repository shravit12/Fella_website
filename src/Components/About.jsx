import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative w-full py-30 bg-gradient-to-b from-black to-gray-900 text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center"
        >
          <img
            src="/fella_product.png"
            alt="Fella Toy"
            className="w-80 sm:w-96 md:w-full max-w-md rounded-2xl shadow-xl border border-white/10"
          />
        </motion.div>

        {/* Product Description */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Fella</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Fella isn’t just a toy — it’s a playful friend built to inspire creativity and imagination. 
            Designed with safe, non-toxic materials, each Fella toy blends fun with safety, 
            making it the perfect choice for kids of all ages.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Collect them, gift them, or take them anywhere — Fella toys are lightweight, portable, and come in 
            unique designs that make playtime exciting every day.
          </p>
          <button className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-200 transition-colors duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
