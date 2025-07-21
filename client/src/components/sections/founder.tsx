import { motion } from "framer-motion";
import founderPhoto from "@assets/owner_1752740690388.png";

const Founder = ({prefixBg}: {prefixBg: string}) => {
  return (
    <section
      className={`py-24 px-8 text-gray-900 dark:text-gray-100 ${prefixBg}`}
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Фоновая сетка с плавным растворением */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.05, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 20%, rgba(0,0,0,0.05) 2px, transparent 10px), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.05) 2px, transparent 10px)",
            backgroundSize: "40px 40px",
            zIndex: 0,
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] p-12 shadow-lg flex md:grid md:grid-cols-3 gap-12 items-center z-10 founder-inner border-8 border-gray-100 transition-all duration-300"
          style={{
            backgroundColor: "#fff",
          }}
        >
          {/* Обертка для изображения с анимацией свечения */}
          <motion.div
            className="relative w-56 h-56 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-gray-50 dark:border-gray-700"
            animate={{
              boxShadow: [
                "0 0 10px 4px rgba(59, 130, 246, 0.6)",
                "0 0 20px 10px rgba(59, 130, 246, 0.9)",
                "0 0 10px 4px rgba(59, 130, 246, 0.6)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={founderPhoto}
              alt="Валерий Студенников"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="md:col-span-2 space-y-6">
            <h3 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
              Основатель — Валерий Студенников
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed border-8 border-gray-100 dark:border-gray-700 p-6 rounded-[40px]">
              <p className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                Со-основатель, ex-CTO и руководитель разработки REG.RU
              </p>
              <p className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                Создал и руководил отделом анализа данных в REG.RU
              </p>
              <p className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                3,5 года преподавал IT-дисциплины в Самарском университете
              </p>
              <p className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                В 2024 году запустил LLM-tech с фокусом на AI-решения
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
