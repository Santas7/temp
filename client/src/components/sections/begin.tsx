import {
  Sparkles,
  Cpu,
  Mic,
  MessageCircle,
  Server
} from "lucide-react";
import { motion } from "framer-motion";

const Begin = ({ prefixBg }: { prefixBg: string }) => {
  return (
    <section className={`pt-32 pb-12 px-6 sm:px-10 ${prefixBg}`}>
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-8">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#111827] mb-4">
            LLM technology
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Молодая IT-компания, специализирующаяся на заказной разработке высокотехнологичного ПО для малого и среднего бизнеса.
          </p>
        </div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <div className="md:flex-[3] p-8 sm:p-10 rounded-3xl shadow-lg bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 backdrop-blur-md border-8 border-gray-100 transition-colors duration-500">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-5 text-justify">
              <strong className="dark:text-blue-400 text-blue-700">Мы — команда энтузиастов</strong> искусственного интеллекта и backend-разработки. Верим в силу технологий и их способность повышать эффективность бизнеса.
            </p>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 text-justify">
              Работаем над коммерческими проектами с декабря 2024 года и готовы решать практически любые задачи в области ИИ и серверной разработки.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              <Feature icon={<MessageCircle size={20} />} text="Natural Language Processing (NLP)" />
              <Feature icon={<Cpu size={20} />} text="Large Language Models (LLM)" />
              <Feature icon={<Sparkles size={20} />} text="AI-агенты" />
              <Feature icon={<Mic size={20} />} text="Системы распознавания речи" />
              <Feature icon={<Server size={20} />} text="Backend любой сложности" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Feature = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-3 bg-white/90 dark:bg-gray-700 rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow transition-colors duration-300">
    <div className="text-blue-600 dark:text-blue-400">{icon}</div>
    <p className="text-sm sm:text-base font-medium text-gray-900 dark:text-gray-100">{text}</p>
  </div>
);

export default Begin;
