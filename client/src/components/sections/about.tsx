import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "Мы создаём решения на базе ИИ.",
  "Повышаем эффективность бизнеса.",
  "Помогаем малому и среднему бизнесу.",
  "Искусственный интеллект в каждом проекте.",
  "Автоматизация рутинных процессов.",
  "Инновационные технологии для роста.",
  "Аналитика данных для точных решений.",
  "Поддержка и сопровождение клиентов.",
  "Интеграция с современными системами.",
  "Надёжность и безопасность ваших данных.",
];

const About = ({ prefixBg }: { prefixBg: string }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`py-24 px-6 ${prefixBg}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-100 mb-20">
          О компании
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 min-h-[320px]"
        >
          {/* Левая часть */}
          <div
            className="md:flex-[3] p-12 rounded-3xl shadow-lg
              bg-white/70 dark:bg-gray-800/70
              text-gray-700 dark:text-gray-300
              backdrop-blur-md
              transition-colors duration-500
              border-8 border-gray-100
            "
          >
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-justify">
              <strong className="dark:text-blue-400 text-blue-700">LLM technology</strong> — команда энтузиастов искусственного интеллекта и backend-разработки.
              Мы верим, что технологии ИИ способны улучшать мир и повышать эффективность бизнеса.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-8 text-justify">
              Если вы малый или средний бизнес,{" "}
              <strong className="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40 px-2 py-1 rounded-md">
                мы можем решить для вас почти любую задачу
              </strong>{" "}
              в области ИИ или backend-разработки.
            </p>

            
            <div
  className="
    bg-white/90 dark:bg-gray-700
    rounded-xl p-6
    shadow-sm
    hover:shadow-md
    hover:bg-white/95 dark:hover:bg-gray-600
    transition-shadow transition-colors duration-300
    flex items-center gap-3
  "
>
  {/* Мигающая точка */}
  <span className="w-3 h-3 rounded-full bg-green-500 animate-ping relative">
    <span className="absolute inset-0 rounded-full bg-green-500 opacity-75"></span>
  </span>

  {/* Текст */}
  <p className="text-sm sm:text-base font-medium text-gray-900 dark:text-gray-100">
    Работаем над коммерческими проектами с декабря 2024
  </p>
</div>

            </div>
          

          {/* Разделитель */}
          <div className="hidden md:block w-[1px] bg-gray-300 dark:bg-gray-700 rounded mx-2" />

          {/* Правая часть */}
          <div
            className="md:flex-1 p-12 rounded-3xl shadow-lg
              bg-white/90 dark:bg-gray-800/90
              text-blue-700 dark:text-blue-400
              font-semibold
              backdrop-blur-md
              transition-colors duration-500
              flex items-center justify-center
              min-h-[200px]
              border-8 border-gray-100
            "
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-lg md:text-xl text-center"
              >
                {phrases[index]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
