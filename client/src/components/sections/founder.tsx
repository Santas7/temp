import { motion } from "framer-motion";
import { Youtube, FileText } from "lucide-react";
import founderPhoto from "@assets/owner_1752740690388.png";

const Founder = ({ prefixBg }: { prefixBg: string }) => {
  return (
    <section
      className={`py-24 px-8 text-gray-900 dark:text-gray-100 ${prefixBg}`}
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Фоновые круги */}
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

        {/* Основной блок */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] p-8 md:p-12 shadow-lg flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-12 items-center z-10 founder-inner border-8 border-gray-100 dark:border-gray-800 transition-all duration-300"
          style={{ backgroundColor: "#fff" }}
        >
          {/* Фото */}
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

          {/* Текстовая часть */}
          <div className="md:col-span-2 space-y-6 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-400">
              Основатель — Валерий Студенников
            </h3>

            <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">

              <li>
                Со-основатель, ex-CTO и руководитель разработки{" "}
                <a
                  href="https://www.reg.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-4"
                >
                  REG.RU
                </a>{" "}
                — крупнейшего в РФ регистратора доменов и хостинг-провайдера
              </li>
              <li>
                Создал и 3 года руководил отделом анализа данных в{" "}
                <a
                  href="https://www.reg.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-4"
                >
                  REG.RU
                </a>
              </li>
              <li>
                Преподаватель IT-дисциплин в Самарском университете, создал несколько авторских курсов, включая «Управление разработкой ПО», «Культура разработки ПО» и «Инструменты анализа данных»
              </li>
              <li>
                 В 2024 году основал компанию LLM technology с фокусом на AI-решения и backend
              </li>
            </ul>

            {/* Ссылки */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-6 text-base font-medium">
              <a
                href="https://www.youtube.com/watch?v=CSNW_fmH_k8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-4"
              >
                <Youtube size={18} /> Интервью
              </a>
              <a
                href="https://oboz.info/kak-samarskij-ajtishnik-postroil-krupnejshuyu-v-rossii-kompaniyu-po-registratsii-domenov/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-4"
              >
                <FileText size={18} /> Статья
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
