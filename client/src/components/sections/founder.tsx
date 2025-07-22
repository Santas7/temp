import { motion } from "framer-motion";
import founderPhoto from "@assets/owner_1752740690388.png";

const Founder = ({ prefixBg }: { prefixBg: string }) => {
  return (
    <section
      className={`py-24 px-8 text-gray-900 dark:text-gray-100 ${prefixBg}`}
    >
      <div className="max-w-6xl mx-auto relative">
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
          className="relative rounded-[40px] p-8 md:p-12 shadow-lg flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-12 items-center z-10 founder-inner border-8 border-gray-100 transition-all duration-300"
          style={{
            backgroundColor: "#fff",
          }}
        >
          <div
            className="relative w-56 h-56 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-gray-50 dark:border-gray-700 order-first"
            style={{
              boxShadow: "0 0 10px 4px rgba(59, 130, 246, 0.6)",
            }}
          >
            <img
              src={founderPhoto}
              alt="Валерий Студенников"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-2 space-y-6 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-400">
              Основатель — Валерий Студенников
            </h3>
            <ul className="list-disc pl-6 space-y-4 text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              <li>Со-основатель, ex-CTO и руководитель разработки REG.RU</li>
              <li>Создал и руководил отделом анализа данных в REG.RU</li>
              <li>3,5 года преподавал IT-дисциплины в Самарском университете</li>
              <li>В 2024 году запустил LLM-tech с фокусом на AI-решения</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;