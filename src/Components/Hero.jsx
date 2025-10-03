import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";

export default function Hero() {
  const [showText, setShowText] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showSmallBoxes, setShowSmallBoxes] = useState(false);
  const [showLargeBoxes, setShowLargeBoxes] = useState(false);

  useEffect(() => {
    setShowNavbar(true);
    const timerText = setTimeout(() => setShowText(true), 1500);
    const timerSmall = setTimeout(() => setShowSmallBoxes(true), 1600);
    const timerLarge = setTimeout(() => setShowLargeBoxes(true), 1700);

    return () => {
      clearTimeout(timerText);
      clearTimeout(timerSmall);
      clearTimeout(timerLarge);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-x-hidden bg-black">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background_fella.png')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col w-full box-border">

        {/* Navbar with animation */}
        {/* <div
          className={`transition-transform duration-400 ease-out w-full ${
            showNavbar ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
          }`}
        >
          <Navbar />
        </div> */}

        {/* Heading */}
        <div className="mt-18 sm:mt-16 text-center sm:text-left max-w-7xl px-6 sm:px-4 overflow-hidden">
          <div
            className={`transition-all duration-700 ease-out transform ${
              showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              A Fella Toy Is A Playful
            </h1>
          </div>
        </div>

        {/* Small Boxes */}
        <div className="overflow-hidden mt-6 sm:mt-10">
          <div
            className={`flex flex-col sm:flex-row w-full py-4 sm:py-1 px-4 sm:px-0 gap-3 sm:gap-4 transform transition-all duration-700 ease-out ${
              showSmallBoxes ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-full sm:w-1/2 h-10 flex items-center justify-center sm:justify-start rounded">
              <span className="text-white text-base sm:text-lg font-medium">Playlist</span>
            </div>
            <div className="w-full sm:w-1/2 h-10 flex items-center justify-center sm:justify-start rounded">
              <span className="text-white text-base sm:text-lg font-medium">Drop Sections</span>
            </div>
          </div>
        </div>

        {/* Large Boxes */}
        <div className="overflow-hidden mt-6 sm:mt-10">
  <div
    className={`flex flex-col sm:flex-row w-full px-4 sm:px-0 gap-4 transform transition-all duration-700 ease-out ${
      showLargeBoxes ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
    {/* Left Box - Music Player */}
<div className="w-full sm:w-1/2 h-38 sm:h-70 flex items-center justify-center border-t border-r border-l border-white/20 rounded-lg">
  <div className="bg-white/20 p-6 sm:p-2 rounded w-4/5 flex flex-col items-center justify-center ">
    
    {/* Album Art */}
    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white/30 rounded-lg overflow-hidden flex items-center justify-center shadow-lg">
      <img
        src="/album_art.png"
        alt="Album Art"
        className="w-full h-full object-cover rounded"
      />
    </div>

    {/* Song Info */}
    <div className="text-center">
      <h4 className="text-white font-semibold text-base sm:text-lg">Fella Beats</h4>
      <p className="text-gray-300 text-sm sm:text-base">Artist Name</p>
    </div>

    {/* Player Controls */}
    <div className="flex items-center justify-center gap-6 mt-2">
      <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/50 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300">
        <FaStepBackward />
      </button>
      <button className="w-12 h-12 sm:w-16 sm:h-16 bg-white/50 hover:bg-white/80 text-black rounded-full flex items-center justify-center shadow-xl transition-all duration-300">
        <FaPlay />
      </button>
      <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/50 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300">
        <FaStepForward />
      </button>
    </div>

    {/* Progress Bar */}
    <div className="w-full h-1 bg-white/30 rounded mt-3">
      <div className="h-full bg-white rounded w-1/3"></div> {/* progress */}
    </div>
  </div>
</div>
    {/* Right Box */}
    <div className="w-full sm:w-1/2 h-48 sm:h-80 flex items-start justify-start border-t border-r border-l border-white/20 rounded-lg">
      <div className="p-4 sm:p-6 rounded w-full flex flex-col items-start justify-start">
        <span className="text-black text-sm sm:text-base">Right Inner Div</span>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
