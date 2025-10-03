import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const links = ["Home", "About", "Features", "Services", "Contact"];

  return (
    <footer className="relative w-full bg-black text-white py-12 min-h-[200px]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-start w-full">
        {/* Logo / Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold">Fella</h2>
          <p className="text-gray-400 text-sm">
            Bringing joy, imagination, and playful companions to children everywhere.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-2"
        >
          <h3 className="font-semibold mb-2">Quick Links</h3>
          {links.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-2"
        >
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-gray-400 text-xl">
            <a href="#" className="hover:text-white transition-colors duration-300"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition-colors duration-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition-colors duration-300"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition-colors duration-300"><FaYoutube /></a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 border-t border-white/20 pt-6 text-center text-gray-500 text-sm"
      >
        &copy; {new Date().getFullYear()} Fella. All rights reserved.
      </motion.div>
    </footer>
  );
}
