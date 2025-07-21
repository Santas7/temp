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
    <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight flex justify-center items-center gap-6 flex-wrap text-center text-[#111827]">
      
      <span>LLM technology</span>
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
