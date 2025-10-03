import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar({ scrollDirection, scrollInstance }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    if (!scrollInstance) return;

    const target = document.querySelector(`#${id}`);
    if (target) {
      scrollInstance.scrollTo(target, {
        offset: 0,
        duration: 1000,
        easing: [0.25, 0.0, 0.35, 1.0],
      });
    }
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}          // starts above screen
      animate={{ y: 0, opacity: 1 }}            // slides down + fades in
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full bg-black/70 backdrop-blur-md transition-transform duration-500 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">Fella</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><button onClick={() => handleScroll("home")} className="hover:text-gray-300">Home</button></li>
          <li><button onClick={() => handleScroll("features")} className="hover:text-gray-300">Features</button></li>
          <li><button onClick={() => handleScroll("services")} className="hover:text-gray-300">Services</button></li>
          <li><button onClick={() => handleScroll("about")} className="hover:text-gray-300">About</button></li>
          <li><button onClick={() => handleScroll("contact")} className="hover:text-gray-300">Contact</button></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md text-center py-4 space-y-4 text-white">
          <button onClick={() => handleScroll("home")} className="block">Home</button>
          <button onClick={() => handleScroll("features")} className="block">Features</button>
          <button onClick={() => handleScroll("services")} className="block">Services</button>
          <button onClick={() => handleScroll("about")} className="block">About</button>
          <button onClick={() => handleScroll("contact")} className="block">Contact</button>
        </div>
      )}
    </motion.nav>
  );
}
