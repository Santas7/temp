import { motion } from "framer-motion";
import { MessageCircle, BarChart3, Server, Check, X } from "lucide-react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa6";

const Favorite = ({prefixBg}: {prefixBg: string}) => {
  return (
    <section className={`py-16 px-4 ${prefixBg}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-4">
            Какие заказы нам интересны
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Мы фокусируемся на сложных технических задачах и инновационных решениях
          </p>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Нам интересны */}
            <div className="rounded-3xl bg-white/60 dark:bg-gray-700/60 backdrop-blur-md border-8 border-gray-100 p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full p-3 mr-4">
                  <FaThumbsUp className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Нам интересны:
                </h3>
              </div>

              <ul className="space-y-5 text-gray-800 dark:text-gray-300 leading-relaxed">
                <li className="flex items-start">
                  <Check
                    className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0"
                  />
                  Фокус на ИИ (ML, LLM) и/или backend
                </li>
                <li className="flex items-start">
                  <Check
                    className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0"
                  />
                  Любые чат-боты (в Telegram или с web-интерфейсом)
                </li>
                <li className="flex items-start">
                  <Check
                    className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0"
                  />
                  Любой frontend (web, мобильные и desktop-приложения), но только если это не является основной частью разработки, а дополнительной, поверх нашего backend
                </li>
                <li className="flex items-start">
                  <Check
                    className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0"
                  />
                  Бюджет от 300k и выше (ниже — обсуждаемо, если небольшая, но интересная задача)
                </li>
              </ul>
            </div>

            {/* Нам не подходят */}
            <div className="rounded-3xl bg-white/60 dark:bg-gray-700/60 backdrop-blur-md border-8 border-gray-100 p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full p-3 mr-4">
                  <FaThumbsDown className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Нам не подходят:
                </h3>
              </div>

              <ul className="space-y-5 text-gray-800 dark:text-gray-300 leading-relaxed">
                <li className="flex items-start">
                  <X
                    className="w-5 h-5 text-red-500 dark:text-red-400 mr-3 mt-0.5 flex-shrink-0"
                  />
                  Заказы, где главное — «сделать красиво» (визуальный дизайн/UI/UX
                  без сложной логики внутри) — это в веб/дизайн-студии
                </li>
                <li className="flex items-start">
                  <X
                    className="w-5 h-5 text-red-500 dark:text-red-400 mr-3 mt-0.5 flex-shrink-0"
                  />
                  Задачи в области бухгалтерии, 1С, SAP, прочего «кровавого
                  enterprise» и интеграции чужих решений — это к интеграторам
                </li>
                <li className="flex items-start">
                  <X
                    className="w-5 h-5 text-red-500 dark:text-red-400 mr-3 mt-0.5 flex-shrink-0"
                  />
                  Заказы с бюджетом ≪ 300k — это к фрилансерам 🙂
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Идеальные задачи */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 max-w-4xl mx-auto bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-8 rounded-3xl shadow-xl border-8 border-gray-100"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Примеры идеальных задач для нас:
          </h3>

          <div className="space-y-8">
            {/* Автоматизация техподдержки */}
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300 p-3 rounded-xl">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
                  Автоматизация техподдержки
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  ИИ, который грамотно отвечает на вопросы клиентов, имеет интеграции с внутренними системами заказчика, базами знаний, различными API и т.п.
                </p>
              </div>
            </div>

            {/* Обработка данных */}
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-300 p-3 rounded-xl">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
                  Обработка данных
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Обработка данных любого рода (тексты, аудио, видео) и дальнейшая автоматизированная аналитика / бизнес-логика поверх анализа (с применением ИИ / ML и не только).
                </p>
              </div>
            </div>

            {/* Языки разработки */}
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 p-3 rounded-xl">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
                  Язык разработки
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  В основном — <span className="font-semibold text-gray-900 dark:text-white">Python</span> + любые другие языки, если задача требует.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Favorite;