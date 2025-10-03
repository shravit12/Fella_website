import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Feature";
import Services from "./Components/Services";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
  const scrollRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [scrollInstance, setScrollInstance] = useState(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: isMobile ? 1.9 : 0.2,
      smartphone: { smooth: true, multiplier: 1.5 },
      tablet: { smooth: true, multiplier: 1.5 },
    });

    setScrollInstance(scroll);

    let lastY = 0;
    scroll.on("scroll", (args) => {
      const currentY = args.scroll.y;
      if (currentY > lastY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastY = currentY;
    });

    const handleResize = () => scroll.update();
    window.addEventListener("resize", handleResize);

    return () => {
      scroll.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-black text-white relative">
      {/* Navbar gets scroll instance */}
      <Navbar scrollDirection={scrollDirection} scrollInstance={scrollInstance} />

      <div ref={scrollRef} data-scroll-container>
        <section id="home" data-scroll-section><Hero /></section>
        <section id="features" data-scroll-section><Features /></section>
        <section id="services" data-scroll-section><Services /></section>
        <section id="about" data-scroll-section><About /></section>
        <section id="contact" data-scroll-section><Contact /></section>
        <section id="footer" data-scroll-section><Footer /></section>
      </div>
    </div>
  );
}
