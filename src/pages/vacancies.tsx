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
  Brain,
  Rocket,
  Lightbulb
} from "lucide-react";
import { FaRubleSign } from "react-icons/fa";

const Vacancies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const vacancies = [
    {
      id: 1,
      title: "Python-разработчик",
      icon: <Code className="w-6 h-6" />,
      location: "Удаленно / Самара",
      salary: "От 80,000",
      type: "Полная занятость",
      color: "bg-blue-100 text-blue-600",
      requirements: [
        "Опыт коммерческой разработки на Python 3+ года",
        "Знание FastAPI, Flask, asyncio",
        "Опыт работы с SQL/NoSQL базами данных",
        "Интерес к сфере ИИ и машинного обучения",
        "Готовность к изучению новых технологий"
      ],
      benefits: [
        "Работа над инновационными ИИ-проектами",
        "Гибкий график и удаленная работа",
        "Профессиональное развитие в области AI",
        "Конкурентная заработная плата",
        "Молодая и амбициозная команда"
      ],
      preferred: [
        "Опыт работы с LLM/ML библиотеками",
        "Знание Docker, GitLab CI/CD",
        "Опыт создания телеграм-ботов"
      ]
    },
    {
      id: 2,
      title: "Специалист по NLP / LLM / ML / DS",
      icon: <Brain className="w-6 h-6" />,
      location: "Удаленно / Самара",
      salary: "От 100,000",
      type: "Полная занятость",
      color: "bg-purple-100 text-purple-600",
      requirements: [
        "Опыт коммерческой разработки в ML/DS от 2 лет",
        "Знание PyTorch, HuggingFace, Transformers",
        "Опыт работы с LLM и NLP задачами",
        "Понимание современных архитектур ИИ",
        "Знание Python и ML-библиотек"
      ],
      benefits: [
        "Работа с передовыми AI-технологиями",
        "Участие в создании инновационных продуктов",
        "Возможность экспериментировать с новыми моделями",
        "Высокая заработная плата",
        "Гибкие условия работы"
      ],
      preferred: [
        "Опыт с vLLM, llama.cpp, Ollama",
        "Знание LangChain, LangGraph",
        "Опыт fine-tuning моделей",
        "Знание Vector Database (FAISS)"
      ]
    }
  ];

  const formats = [
    "Проектная работа",
    "Абонентское обслуживание",
    "Субподряд",
    "Техническое консультирование"
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🚀 Ищем Python-разработчиков и ИИ-специалистов
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Привет! Меня зовут Валерий Студенников. Я — сооснователь и бывший технический директор REG.RU.
            Сейчас запускаю технологически ориентированную компанию с фокусом на ИИ и нестандартный backend.
            Нас не интересуют сайты для парикмахерских или ERP на 1С — только настоящая инженерия.
          </p>
        </motion.div>

        {/* О проектах */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          <div className="bg-white/60 rounded-2xl p-6 shadow-sm flex items-start space-x-4">
            <Rocket className="text-indigo-600 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Машинное обучение</h3>
              <p className="text-gray-600">Большие языковые модели, нейросети, эксперименты с LLM.</p>
            </div>
          </div>
          <div className="bg-white/60 rounded-2xl p-6 shadow-sm flex items-start space-x-4">
            <Lightbulb className="text-yellow-500 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">AI-агенты и чат-боты</h3>
              <p className="text-gray-600">Умные диалоговые системы, интеллектуальные интерфейсы, агенты-помощники.</p>
            </div>
          </div>
          <div className="bg-white/60 rounded-2xl p-6 shadow-sm flex items-start space-x-4">
            <Code className="text-green-500 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Нетипичный backend</h3>
              <p className="text-gray-600">Много логики, сложные структуры, отсутствие шаблонов.</p>
            </div>
          </div>
          <div className="bg-white/60 rounded-2xl p-6 shadow-sm flex items-start space-x-4">
            <Brain className="text-pink-500 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Обработка данных</h3>
              <p className="text-gray-600">Тексты, аудио, видео — всё, что можно структурировать и анализировать.</p>
            </div>
          </div>
        </motion.div>

        {/* Вакансии */}
        <div className="space-y-8">
          {vacancies.map((vacancy, index) => (
            <motion.div
              key={vacancy.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="glass-strong rounded-2xl shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${vacancy.color} rounded-xl flex items-center justify-center`}>
                        {vacancy.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800">{vacancy.title}</h2>
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
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Будет плюсом:</h3>
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
                        Откликнуться
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Форматы сотрудничества */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-effect rounded-2xl p-8 shadow-lg mt-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Форматы сотрудничества
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {formats.map((format, index) => (
              <div key={index} className="bg-white/60 rounded-xl p-4 text-center">
                <p className="font-semibold text-gray-800">{format}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Удалёнка, гибкий график, можно совмещать. Формат: поначалу проектный (ГПХ), потом возможен выход в штат.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-violet-500 hover:bg-violet-600 text-white"
            >
              <a href="https://t.me/xtrueman" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Связаться с нами
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Vacancies;
