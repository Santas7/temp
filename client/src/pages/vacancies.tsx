import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import {
  MapPin,
  Check,
  Plus,
  MessageCircle,
  Clock,
} from "lucide-react";
import {
  FaRubleSign,
  FaLightbulb,
  FaSearch,
  FaPython,
  FaBrain,
  FaChartPie,
  FaRobot,
  FaComment,
  FaChartBar,
  FaCog,
  FaHome,
  FaFileAlt,
  FaMoneyBill,
} from "react-icons/fa";

import { vacancies } from "@/data/vacancies";

const Vacancies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[100px] pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <Card className=" bg-white/70 dark:bg-gray-900/70 border-8 border-gray-100 rounded-3xl shadow-xl w-full max-w-full">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center justify-center">
                  🚀 Ищем в команду Python-разработчиков и ИИ-специалистов
                </h1>
                <div className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed space-y-5">
                  <p>
                    Меня зовут <span className="font-semibold text-gray-900 dark:text-white">Валерий Студенников</span>. Я — сооснователь и бывший технический директор <strong>REG.RU</strong>.
                  </p>
                  <p>
                    В своё время создал и руководил отделом анализа данных внутри компании. После продажи REG.RU 3.5 года назад преподавал IT-дисциплины в Самарском университете.
                  </p>
                  <p>
                    Сейчас возвращаюсь в индустрию: запускаю небольшую, но технологически ориентированную компанию. Фокус — задачи в области <strong>ИИ</strong> и <strong>нестандартного backend</strong>.
                  </p>
                  <p>
                    Мы не делаем <em>«сайты для парикмахерских»</em> или ERP на 1С. Нас интересует инженерия, а не мейкап.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
            <FaLightbulb className="text-blue-500 mr-2 text-3xl" /> О чём наши проекты
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[{
              icon: <FaRobot className="text-indigo-500 text-2xl" />, title: "Машинное обучение", desc: "Большие языковые модели (LLM)"
            }, {
              icon: <FaComment className="text-yellow-500 text-2xl" />, title: "AI-агенты", desc: "Чат-боты с интеллектом"
            }, {
              icon: <FaChartBar className="text-pink-500 text-2xl" />, title: "Обработка данных", desc: "Тексты, аудио, видео"
            }, {
              icon: <FaCog className="text-green-500 text-2xl" />, title: "Интересный backend", desc: "С нетривиальной логикой"
            }].map(({ icon, title, desc }, i) => (
              <div key={i} className="bg-white/60 rounded-2xl p-6 shadow-sm flex items-center space-x-4 border-8 border-gray-100">
                {icon}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
            <FaSearch className="text-blue-500 mr-2 text-3xl" /> Открытые вакансии
          </h2>
          <div className="space-y-8">
            {vacancies.map((vacancy, index) => (
              <motion.div
                key={vacancy.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="w-full max-w-full rounded-2xl shadow-lg border-8 border-gray-100">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${vacancy.color} rounded-xl flex items-center justify-center`}>
                          {vacancy.icon}
                        </div>
                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center">
                            {vacancy.id === 1 ? <FaPython className="text-blue-600 mr-2 text-xl sm:text-2xl" /> : <FaBrain className="text-purple-600 mr-2 text-xl sm:text-2xl" />}
                            {vacancy.title} ({vacancy.level})
                          </h2>
                          <div className="flex flex-wrap items-center space-x-4 text-gray-600 mt-2">
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {vacancy.location}
                            </span>
                            <span className="flex items-center">
                              <FaRubleSign className="w-4 h-4 mr-1" />
                              {vacancy.salary}
                            </span>
                            <Badge variant="secondary" className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {vacancy.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Обязательные требования:</h3>
                        <ul className="space-y-3">
                          {vacancy.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start text-gray-700">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Мы предлагаем:</h3>
                        <ul className="space-y-3">
                          {vacancy.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start text-gray-700">
                              <Check className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Желательно / приветствуется:</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {vacancy.preferred.map((pref, prefIndex) => (
                          <li key={prefIndex} className="flex items-start text-gray-700">
                            <Plus className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                            {pref}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <Button asChild className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl">
                        <a href="https://t.me/xtrueman" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-5 h-5 mr-2" />
                          Написать в Telegram
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-effect rounded-2xl p-6 sm:p-8 shadow-lg mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center">
            <FaChartPie className="text-blue-500 mr-2 text-3xl" /> Условия работы
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[{
              icon: <FaHome className="w-8 h-8 mx-auto mb-2 text-blue-500" />, title: "Удалённая работа", desc: "Гибкий график, можно совмещать"
            }, {
              icon: <FaFileAlt className="w-8 h-8 mx-auto mb-2 text-blue-500" />, title: "Формат", desc: "Поначалу проектный (ГПХ), потом возможен выход в штат"
            }, {
              icon: <FaMoneyBill className="w-8 h-8 mx-auto mb-2 text-blue-500" />, title: "Оплата", desc: "Договорная, почасовая / поэтапная / фикс — зависит от задач"
            }].map(({ icon, title, desc }, i) => (
              <div key={i} className="bg-white/60 rounded-xl p-4 text-center">
                {icon}
                <p className="font-semibold text-gray-800">{title}</p>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Как откликнуться</h2>
          <p className="text-xl text-gray-600 mb-6">
            Пишите в Telegram: <a href="https://t.me/xtrueman" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@xtrueman</a>
          </p>
          <p className="text-xl text-gray-600 mb-6">
            Буду рад знакомству и сотрудничеству!
          </p>
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-violet-500 hover:bg-violet-600 text-white"
          >
            <a href="https://t.me/xtrueman" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Написать в Telegram
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Vacancies;