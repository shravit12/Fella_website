import { useEffect, useRef, useState } from "react";

export default function Features() {
  const [showFeatures, setShowFeatures] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowFeatures(true);
          observer.disconnect(); // only trigger once
        }
      },
      { threshold: 0.2 } // 20% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const features = [
    { title: "Interactive", description: "Engages children with fun and imaginative play." },
    { title: "Safe Material", description: "Made from child-safe, non-toxic materials." },
    { title: "Collectible", description: "Different designs and series to collect and share." },
    { title: "Portable", description: "Small and lightweight, easy to carry anywhere." },
  ];

  return (
    <section ref={sectionRef} className="relative w-full py-50 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Fella Features</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transform transition-all duration-700 ease-out ${
                showFeatures ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 650}ms` }}
            >
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
