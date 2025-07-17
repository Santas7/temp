import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { 
  MapPin, 
  DollarSign, 
  Check, 
  Plus, 
  MessageCircle, 
  Clock,
  Code,
  Brain
} from "lucide-react";

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
      salary: "От 80,000 ₽",
      type: "Полная занятость",
      color: "bg-blue-100 text-blue-600",
      requirements: [
        "Опыт коммерческой разработки на Python 3+ года",
        "Знание FastAPI, Flask, asyncio",
        "Уверенное знание SQL, PostgreSQL и/или MySQL",
        "Пользовательский опыт работы с LLM (ChatGPT, Claude)",
        "Интерес к сфере искусственного интеллекта",
        "Наличие портфолио проектов"
      ],
      benefits: [
        "Работа над инновационными ИИ-проектами",
        "Гибкий график и удаленная работа",
        "Профессиональное развитие в области AI",
        "Конкурентная заработная плата",
        "Молодая и амбициозная команда"
      ],
      preferred: [
        "Знание иных языков программирования",
        "Опыт во Frontend-разработке",
        "Опыт в DevOps-практиках",
        "Опыт работы с Docker, CI/CD"
      ]
    },
    {
      id: 2,
      title: "Специалист по NLP / LLM / ML / DS",
      icon: <Brain className="w-6 h-6" />,
      location: "Удаленно / Самара",
      salary: "От 100,000 ₽",
      type: "Полная занятость",
      color: "bg-purple-100 text-purple-600",
      requirements: [
        "Коммерческий опыт от 2 лет в NLP/LLM/ML/DS/CV",
        "Базовое понимание ML (концепции, типы задач, метрики)",
        "Знание PyTorch, HuggingFace, LangChain",
        "Опыт работы с большими языковыми моделями",
        "Навыки Prompt Engineering",
        "Портфолио или описание решённых задач"
      ],
      benefits: [
        "Работа с передовыми AI-технологиями",
        "Участие в создании инновационных продуктов",
        "Возможность экспериментировать с новыми моделями",
        "Высокая заработная плата",
        "Гибкие условия работы"
      ],
      preferred: [
        "Опыт fine-tuning моделей",
        "Знание векторных БД (FAISS, Pinecone)",
        "Опыт работы с Speech-to-Text",
        "Навыки Computer Vision",
        "Опыт применения NLP/LLM в продакшене"
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
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Вакансии
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ищем в команду талантливых специалистов для работы над инновационными проектами
          </p>
          
          <div className="glass-effect rounded-2xl p-6 mb-8">
            <p className="text-lg text-gray-700 mb-4">
              Меня зовут <strong>Валерий Студенников</strong>. Я — сооснователь и бывший технический директор REG.RU. 
              Сейчас возвращаюсь в индустрию и запускаю технологически ориентированную компанию.
            </p>
            <p className="text-lg text-gray-700">
              Мы не делаем «сайты для парикмахерских» или ERP на 1С. Нас интересует инженерия, а не мейкап.
            </p>
          </div>
        </motion.div>

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
                            <DollarSign className="w-4 h-4 mr-1" />
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
              Удалёнка, гибкий график, можно совмещать. Формат: поначалу проектный (ГПХ), 
              потом возможен выход в штат.
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
