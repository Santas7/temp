import { motion } from "framer-motion";
import { FaRobot, FaChartLine, FaBrain, FaCogs, FaChartBar } from "react-icons/fa";


const About = ({ prefixBg }: { prefixBg: string }) => {
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
              border-8 border-gray-100"
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
              <span className="w-3 h-3 rounded-full bg-green-500 relative">
                <span className="absolute inset-0 rounded-full bg-green-500 opacity-75"></span>
              </span>

              {/* Текст */}
              <p className="text-sm sm:text-base font-medium text-gray-900 dark:text-gray-100">
                Работаем над коммерческими проектами с декабря 2024
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;