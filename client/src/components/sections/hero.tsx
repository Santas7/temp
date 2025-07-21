import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Settings } from "lucide-react";

// Анимированный заголовок
const AnimatedTitle = ({ text }: { text: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % text.length);
    }, 300);
    return () => clearInterval(interval);
  }, [text.length]);

  

  return (
    <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight flex justify-center flex-wrap text-center text-[#111827]">
      {text.split("").map((char, idx) => {
        const isActive = idx === activeIndex;

        return (
          <motion.span
            key={idx}
            animate={
              isActive
                ? {
                    textShadow: [
                      "0 0 0px rgba(255,255,255,0)",
                      "0 0 24px rgba(255,255,255,1)",   // Увеличили интенсивность
                      "0 0 48px rgba(255,255,255,1)",   // Увеличили диаметр
                      "0 0 24px rgba(255,255,255,0.8)",  // Уменьшили второй уровень
                      "0 0 0px rgba(255,255,255,0)",
                    ],
                    color: "#ffffff", // Яркий белый цвет для активной буквы
                  }
                : {
                    textShadow: "none",
                    color: "#111827", // Тёмный цвет для неактивных букв
                  }
            }
            transition={{
              duration: 2.4, // Плавность анимации
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </h1>
  );
};

const Hero = ({ prefixBg }: { prefixBg: string }) => {
  const [idea, setIdea] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim()) {
      window.open(`https://t.me/xtrueman?text=${encodeURIComponent(idea)}`, "_blank");
    }
  };

  const popularQueries = [
    "нужен ИИ Агент",
    "нужен Backend",
    "нужна поддержка/консультация",
  ];

  return (
    <section
      className={`min-h-screen flex items-center justify-center pt-32 px-6 sm:px-10 ${prefixBg}`}
    >
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-8 py-16">
        {/* Label */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F1F1F1] to-[#FAFAFA] text-[#5B3EFF] px-5 py-2.5 rounded-full text-sm sm:text-base font-medium mb-8 shadow-sm backdrop-blur-md bg-opacity-30">
  <Settings size={18} />
  <span>Индивидуальная разработка LLM, AI и backend решений</span>
</div>


        {/* Заголовок */}
        <div className="mb-6">
          <AnimatedTitle text="LLM technology" />
        </div>

        {/* Подзаголовок */}
        <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
          Команда энтузиастов в сфере AI и backend. Специализируемся на NLP, LLM,
          AI-агентах и системах распознавания речи.
        </p>

        {/* Форма */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-4"> {/* Уменьшил mb-10 на mb-4 */}
        <div className="flex items-center bg-white rounded-[40px] shadow-lg px-6 py-4 w-full border border-8 border-gray-100 transition-all duration-300 focus-within:ring-2 ">

    <input
      type="text"
      placeholder="Опишите задачу или оставьте контакт..."
      value={idea}
      onChange={(e) => setIdea(e.target.value)}
      className="flex-1 min-w-0 bg-transparent outline-none text-base sm:text-lg text-gray-900 placeholder-gray-500"
    />
    <button
      type="submit"
      className="ml-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#5B3EFF] hover:bg-[#4a32d1] transition-all flex items-center justify-center"
    >
      <motion.span
        className="text-white text-xl sm:text-2xl select-none"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{
          repeat: Infinity,
          repeatDelay: 3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        ✦
      </motion.span>
    </button>
  </div>
</form>

{/* Блок с кнопками запросов */}
<div className="flex flex-wrap justify-start gap-3 max-w-2xl mx-auto mb-10 mt-0">
  {popularQueries.map((query, idx) => (
    <button
      key={idx}
      onClick={() => setIdea("Здравствуйте! Мне " + query + ".")}
      className="bg-white text-gray-900 text-sm sm:text-base font-medium px-4 py-2 rounded-full hover:bg-gray-200 transition-all"
    >
      {query}
    </button>
  ))}
</div>


        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://t.me/xtrueman"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-950 text-white px-8 py-4 rounded-xl font-semibold transition-all"
          >
            Обсудить проект
          </a>
          <a
            href="/portfolio"
            className="border border-gray-400 hover:border-gray-600 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all"
          >
            Посмотреть проекты
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
