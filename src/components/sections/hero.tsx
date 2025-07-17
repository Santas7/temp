import { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [idea, setIdea] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim()) {
      window.open(`https://t.me/xtrueman?text=${encodeURIComponent(idea)}`, '_blank');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Разработка ИИ-решений и backend для малого и среднего бизнеса
        </h2>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Специализируемся на создании решений на базе NLP, LLM, AI-агентов и Speech-to-Text. 
          Можем решить для вас почти любую задачу в области ИИ или backend-разработки.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center bg-white rounded-[40px] shadow-md px-6 py-4 w-full border border-gray-200">
            <input
              type="text"
              placeholder="Опишите задачу или оставьте контакт..."
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              className="flex-1 bg-transparent outline-none text-base text-gray-700 placeholder-gray-500"
            />
            <button
              type="submit"
              className="ml-4 w-12 h-12 rounded-full bg-[#5B3EFF] flex items-center justify-center hover:bg-[#4a32d1] transition-all"
            >
              <span className="text-white text-xl">✦</span>
            </button>
          </div>
        </form>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://t.me/xtrueman"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-medium transition-all"
          >
            Обсудить проект
          </a>
          <a
            href="/portfolio"
            className="border border-gray-300 hover:border-gray-400 text-gray-800 px-8 py-4 rounded-xl font-medium transition-all"
          >
            Посмотреть проекты
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
