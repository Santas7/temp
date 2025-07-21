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
  Code,
  Brain
} from "lucide-react";
import {
  FaRubleSign,
  FaRocket,
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
  FaMoneyBill
} from "react-icons/fa";

const Vacancies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const vacancies = [
    {
      id: 1,
      title: "Python-разработчик",
      level: "Middle+",
      icon: <Code className="w-6 h-6" />,
      location: "Удаленно",
      salary: "Договорная",
      type: "Гибкий график, можно совмещать",
      color: "bg-blue-100 text-blue-600",
      requirements: [
        "Опыт коммерческой разработки от 2 лет",
        "Уверенное знание Python (middle+)",
        "Наличие портфолио проектов и код, на который можно посмотреть",
        "Опыт работы с asyncio",
        "Опыт с Flask, FastAPI",
        "PostgreSQL и/или MySQL, уверенный SQL",
        "Пользовательский опыт работы с LLM (ChatGPT, Claude и т.п.)",
        "Интерес к ИИ и желание развиваться в этой области"
      ],
      benefits: [
        "Удалённая работа",
        "Гибкий график, можно совмещать",
        "Проектный формат (ГПХ) с возможностью перехода в штат",
        "Договорная оплата (почасовая / поэтапная / фикс)",
        "Работа над инновационными ИИ-проектами",
        "Молодая и амбициозная команда"
      ],
      preferred: [
        "Знания иных языков программирования",
        "Опыт во FrontEnd",
        "Опыт в DevOps-практиках"
      ]
    },
    {
      id: 2,
      title: "Специалист NLP / LLM / ML / DS",
      level: "Middle+",
      icon: <Brain className="w-6 h-6" />,
      location: "Удаленно",
      salary: "Договорная",
      type: "Гибкий график, можно совмещать",
      color: "bg-purple-100 text-purple-600",
      requirements: [
        "Коммерческий опыт от 2 лет, из них не менее 1 года в одной из областей: NLP, LLM, ML, DS, CV",
        "Базовое понимание ML (общие концепции, типы задач, метрики)",
        "Портфолио или описание решённых задач"
      ],
      benefits: [
        "Удалённая работа",
        "Гибкий график, можно совмещать",
        "Проектный формат (ГПХ) с возможностью перехода в штат",
        "Договорная оплата (почасовая / поэтапная / фикс)",
        "Работа с передовыми AI-технологиями",
        "Участие в создании инновационных продуктов"
      ],
      preferred: [
        "Навыки в computer vision",
        "Опыт применения NLP / LLM в проде"
      ]
    }
  ];

  return (
    <div className="pt-[140px] pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb
          items={[
            { label: "Главная", href: "/" },
            { label: "Вакансии" }
          ]}
        />

        {/* Вступление */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center">
          🚀 Ищем в команду Python-разработчиков и ИИ-специалистов
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Меня зовут Валерий Студенников. Я — сооснователь и бывший технический директор REG.RU. Также в своё время создал и руководил отделом анализа данных внутри компании. После продажи REG.RU 3.5 года назад преподавал IT-дисциплины в Самарском университете. Сейчас возвращаюсь в индустрию: запускаю небольшую, но технологически ориентированную компанию. Фокус — задачи в области ИИ и нестандартного backend. Мы не делаем «сайты для парикмахерских» или ERP на 1С. Нас интересует инженерия, а не мейкап.
          </p>
        </motion.div>

        {/* О чём наши проекты */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
            <FaLightbulb className="text-blue-500 mr-2 text-3xl" /> О чём наши проекты
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/60 rounded-2xl p-6 shadow-sm flex items-center space-x-4 border-8 border-gray-100">
              <FaRobot className="text-indigo-500 text-2xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Машинное обучение</h3>
                <p className="text-gray-600">Большие языковые модели (LLM)</p>
              </div>
            </div>
            <div className="bg-white/60 rounded-2xl p-6 shadow-sm flex items-center space-x-4 border-8 border-gray-100">
              <FaComment className="text-yellow-500 text-2xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">AI-агенты</h3>
                <p className="text-gray-600">Чат-боты с интеллектом</p>
              </div>
            </div>
            <div className="bg-white/60 rounded-2xl p-6 shadow-sm flex items-center space-x-4 border-8 border-gray-100">
              <FaChartBar className="text-pink-500 text-2xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Обработка данных</h3>
                <p className="text-gray-600">Тексты, аудио, видео</p>
              </div>
            </div>
            <div className="bg-white/60 rounded-2xl p-6 shadow-sm flex items-center space-x-4 border-8 border-gray-100">
              <FaCog className="text-green-500 text-2xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Интересный backend</h3>
                <p className="text-gray-600">С нетривиальной логикой</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Открытые вакансии */}
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
                <Card className=" rounded-2xl shadow-lg border-8 border-gray-100">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${vacancy.color} rounded-xl flex items-center justify-center`}>
                          {vacancy.icon}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                            {vacancy.id === 1 ? <FaPython className="text-blue-600 mr-2 text-2xl" /> : <FaBrain className="text-purple-600 mr-2 text-2xl" />}
                            {vacancy.title} ({vacancy.level})
                          </h2>
                          <div className="flex items-center space-x-4 text-gray-600 mt-2">
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

                    <div className="grid md:grid-cols-2 gap-8 mb-6">
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
                      <ul className="grid md:grid-cols-2 gap-3">
                        {vacancy.preferred.map((pref, prefIndex) => (
                          <li key={prefIndex} className="flex items-start text-gray-700">
                            <Plus className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                            {pref}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <Button
                        asChild
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl"
                      >
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

        {/* Условия работы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-effect rounded-2xl p-8 shadow-lg mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center">
            <FaChartPie className="text-blue-500 mr-2 text-3xl" /> Условия работы
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/60 rounded-xl p-4 text-center">
              <FaHome className="w-8 h-8 mx-auto mb-2 text-blue-500" />
              <p className="font-semibold text-gray-800">Удалённая работа</p>
              <p className="text-gray-600">Гибкий график, можно совмещать</p>
            </div>
            <div className="bg-white/60 rounded-xl p-4 text-center">
              <FaFileAlt className="w-8 h-8 mx-auto mb-2 text-blue-500" />
              <p className="font-semibold text-gray-800">Формат</p>
              <p className="text-gray-600">Поначалу проектный (ГПХ), потом возможен выход в штат</p>
            </div>
            <div className="bg-white/60 rounded-xl p-4 text-center">
              <FaMoneyBill className="w-8 h-8 mx-auto mb-2 text-blue-500" />
              <p className="font-semibold text-gray-800">Оплата</p>
              <p className="text-gray-600">Договорная, почасовая / поэтапная / фикс — зависит от задач</p>
            </div>
          </div>
        </motion.div>

        {/* Как откликнуться */}
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
            className="bg-violet-500 hover:bg-violet-600 text-white"
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