import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import antantsBlack from "@assets/brands/antants-black.png";
import lunettes from "@assets/brands/lunettes.png";
import samokatWhite from "@assets/brands/samokat-white.png";
import ssauBlack from "@assets/brands/ssau-black.png";
import tbBlack from "@assets/brands/tb-black.png";

const Clients = ({ prefixBg }: { prefixBg: string }) => {
  const clients = [
    { name: "Транспорт будущего", industry: "Дроны и логистика", logo: tbBlack },
    { name: "Самокат", industry: "Доставка", logo: samokatWhite },
    { name: "Роскошное зрение", industry: "Медицина", logo: lunettes },
    { name: "Самарский университет", industry: "Образование", logo: ssauBlack },
    { name: "Бизнес-клуб Атланты", industry: "Бизнес-сообщество", logo: antantsBlack },
  ];

  const controls = useAnimation();

  useEffect(() => {
    let isMounted = true;
  
    const loopAnimation = async () => {
      while (isMounted) {
        await controls.start({
          x: "-100%",
          transition: { duration: 30, ease: "linear" },
        });
  
        // Only call set if component is still mounted
        if (!isMounted) break;
  
        await controls.set({ x: 0 });
      }
    };
  
    loopAnimation();
  
    return () => {
      isMounted = false;
    };
  }, [controls]);
  

  return (
    <section className={`py-32 px-4 ${prefixBg}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Наши клиенты
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Компании, которые доверяют нам свои проекты
          </p>
        </motion.div>

        {/* Ограниченная зона прокрутки */}
        <div className="relative overflow-hidden max-w-full">
          <motion.div
            className="flex space-x-12 w-max"
            animate={controls}
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[250px] glass-strong rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-24 h-16 mx-auto mb-6 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{client.name}</h3>
                <p className="text-gray-600">{client.industry}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
