import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Carousel } from "@/components/ui/carousel";
import {
  Rocket,
  Stethoscope,
  Network,
  Monitor,
  MessageCircle,
  Brain,
  ExternalLink,
  Bot,
} from "lucide-react";

import postamatImage1 from "@assets/postamat1.png";
import postamatImage2 from "@assets/postamat2.png";
import postamatImage3 from "@assets/postamat3.png";

import postamatImage4 from "@assets/postamat4.png";
import postamatImage5 from "@assets/postamat5.png";
import postamatImage6 from "@assets/postamat6.png";

import healthcareImage1 from "@assets/healthcare_image_1.png"; // Placeholder: Replace with actual image paths
import healthcareImage2 from "@assets/healthcare_image_2.png";
import healthcareImage3 from "@assets/healthcare_image_3.png";
import prmImage1 from "@assets/prm_image_1.png";
import screencastImage1 from "@assets/screencast_image_1.png";
import screencastImage2 from "@assets/screencast_image_2.png";
import screencastImage3 from "@assets/screencast_image_3.png";

import antantsBlack from "@assets/brands/antants-black.png";
import lunettes from "@assets/brands/lunettes.png";
import samokatWhite from "@assets/brands/samokat-white.png";
import screenstructor from "@assets/brands/screenstructor.png";
import ssauBlack from "@assets/brands/ssau-black.png";
import tbBlack from "@assets/brands/tb-black.png";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const commercialProjects = [
    {
      id: 1,
      icon: <Rocket className="w-8 h-8" />,
      title: "ПО для дрон-постаматов",
      description:
        "Пилотный проект завода гражданских дронов «Транспорт будущего» и сервиса доставки «Самокат». Автоматический постамат, который умеет принимать посылки с дрона.",
      additionalDescription:
        "Первый в России проект подобного рода. Суть проекта — автоматический постамат, который умеет не только автономно выдавать посылки, но и принимать посылки с дрона. Протестировано в работе первым лицом государства.",
      technologies: ["IoT", "Backend", "Hardware", "Frontend"],
      clients: {
        "Транспорт будущего": "https://tb-drone.ru/",
        "Самокат": "https://samokat.ru/",
      },
      color: "bg-blue-100 text-blue-600",
      status: "Законченный MVP",
      media: {
        "Статья 1": "https://volga.news/article/741908.html",
        "Статья 2": "https://oborot.ru/news/skolko-samokat-gotov-potratit-na-eksperimentalnuyu-dostavku-kvadrokopterami-v-tolyatti-i-kak-eto-vse-budet-rabotat-i236262.html",
      },
      results: [
        "ПО для встроенного компьютера постомата",
        "Объединение фронтенда, внешних сервисов и PLC-контроллеров",
        "Управление всей логикой и функциями постомата",
        "Прототип интерфейса для встроенного планшета",
        "Успешное тестирование первым лицом государства",
      ],
      images: [postamatImage1, postamatImage2, postamatImage3, postamatImage4, postamatImage5, postamatImage6],
    },
    {
      id: 2,
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Система контроля соблюдения бизнес-процессов на базе ИИ",
      description:
        "Система для Оптических сетей с транскрипцией разговоров врачей с пациентами и оценкой соответствия корпоративным стандартам.",
      additionalDescription:
        "Комплексная система для медицинских учреждений, которая автоматически анализирует качество общения врачей с пациентами. Включает модули транскрипции речи в текст, оценки соответствия разговоров медицинским стандартам, сбора статистики и отслеживания динамики изменений.",
      technologies: ["Speech-to-Text", "LLM", "Аналитика", "AI", "Healthcare", "Frontend"],
      clients: {
        "Роскошное зрение": "https://www.lunettes.ru/",
      },
      color: "bg-red-100 text-red-600",
      status: "Завершен",
      results: [
        "Транскрипция разговоров врачей с пациентами",
        "Транскрипция диалогов сотрудников колл-центра с клиентами",
        "Оценка соответствия диалогов корпоративным стандартам",
        "Статистика и динамика изменений",
        "Повышение качества медицинского обслуживания",
      ],
      images: [healthcareImage1, healthcareImage2, healthcareImage3],
    },
    {
      id: 3,
      icon: <Network className="w-8 h-8" />,
      title: "PRM-система с ИИ-поиском",
      description:
        "Personal Relationships Management System для управления персональными связями и эффективного нетворкинга с ИИ-поиском людей.",
      additionalDescription:
        "Система для управления персональными связями и эффективного нетворкинга. Позволяет объединить все контакты клиента в единую базу 'карточек', автоматически обогатить карточки людей информацией из открытых источников (OSINT), а также с помощью ИИ осуществлять интеллектуальный поиск людей по произвольному запросу.",
      technologies: [
        "LLM",
        "Telegram",
        "CV",
        "Data mining",
        "Vector search",
        "RAG",
        "FAISS",
        "Social networks",
        "AI Search"
      ],
      clients: {
        "Бизнес-клуб «Атланты»": "https://atlanty.ru/",
      },
      color: "bg-purple-100 text-purple-600",
      status: "Завершен",
      results: [
        "Объединение всех контактов в единую базу",
        "Автоматическое обогащение карточек из открытых источников",
        "ИИ-поиск по произвольным запросам",
        "Эффективный нетворкинг и управление связями",
      ],
      examples: ["занимается заказной разработкой в сфере ИИ"],
      images: [prmImage1],
    },
    {
      id: 4,
      icon: <Monitor className="w-8 h-8" />,
      title: "Скринкаст-рекордер",
      description:
        "Desktop-программа для записи экрана и любых действий пользователя. Часть инновационной обучающей платформы ScreenStructor.",
      additionalDescription:
        "Desktop-программа для записи экрана и любых действий пользователя (клавиатура, мышь). Часть инновационной обучающей платформы, основанной на web-эмуляции десктоп-приложений. Позволяет создавать интерактивные обучающие материалы.",
      technologies: [
        "video encoding",
        "screen capture",
        "user input tracking",
        "Desktop",
        "Windows",
        "EdTech",
        "Recording",
      ],
      clients: {"ScreenStructor": ""},
      color: "bg-orange-100 text-orange-600",
      status: "Завершен",
      results: [
        "Запись экрана и действий пользователя",
        "Поддержка клавиатуры и мыши",
        "Интеграция с обучающей платформой",
        "Web-эмуляция десктоп-приложений",
        "Создание интерактивных обучающих материалов",
      ],
      images: [screencastImage1, screencastImage2, screencastImage3],
    },
  ];

  const demoProjects = [
    {
      id: 5,
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Telegram-бот для расшифровки голосовых",
      description:
        "Telegram-бот для расшифровки голосовых сообщений и аудиодорожек видео-сообщений с поддержкой «кружков» Telegram.",
      additionalDescription:
        "Удобный Telegram-бот, который автоматически преобразует голосовые сообщения и аудиодорожки видео-сообщений в текст. Поддерживает «кружки» Telegram, работает с различными форматами аудио, обеспечивает высокую точность распознавания речи. Можно отправлять сообщения напрямую, а также включать бота в любые чаты для расшифровки всех входящих аудиосообщений.",
      technologies: ["Telegram", "Bot", "Audio AI", "Speech-to-Text", "Whisper"],
      color: "bg-green-100 text-green-600",
      status: "Технодемо",
      link: "@rus152_The_Ultimate_TG_bot",
      results: [
        "Поддержка всех популярных аудиоформатов",
        "Поддержка «кружков» Telegram",
        "Whisper + оптимизации под GPU",
        "Быстрая обработка сообщений",
        "Высокая точность распознавания",
      ],
    },
    {
      id: 6,
      icon: <Brain className="w-8 h-8" />,
      title: "AI-ассистент HR-агентства",
      description:
        "ИИ-ассистент для управления базой сотрудников, сбора статистики и диалога через web-интерфейс.",
      additionalDescription:
        "Интеллектуальная система для HR-агентства с возможностями управления базой сотрудников, автоматического сбора и анализа статистики, а также ведения диалога с пользователями через удобный web-интерфейс.",
      technologies: ["AI-Agent", "Web", "HR", "Analytics"],
      color: "bg-violet-100 text-violet-600",
      status: "Технодемо",
      results: [
        "Управление базой сотрудников",
        "Автоматический сбор статистики",
        "Диалог через web-UI",
        "Аналитика и отчеты",
        "Интеллектуальная обработка запросов",
      ],
    },
    {
      id: 7,
      icon: <Brain className="w-8 h-8" />,
      title: "AI-ассистент для шахмат (Chrome-плагин)",
      description:
        "Chrome-расширение с мульти-агентной системой для анализа шахматных позиций и рекомендаций ходов.",
      additionalDescription:
        "Интеллектуальное Chrome-расширение для шахматистов с мульти-агентной архитектурой. Включает агентов для анализа позиции, RAG-рекомендации и выбора оптимального хода. Помогает улучшить игру и понимание шахматных позиций.",
      technologies: ["AI-Agent", "Extension", "Chess", "Multi-Agent"],
      color: "bg-teal-100 text-teal-600",
      status: "Технодемо",
      results: [
        "Мульти-агентная система",
        "Анализ шахматных позиций",
        "RAG-рекомендации",
        "Выбор оптимального хода",
        "Интеграция с популярными шахматными сайтами",
      ],
    },
    {
      id: 8,
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Бот справочник по синтезатору KORG",
      description:
        "AI-бот консультирующий по документации синтезатора Korg Pa5X.",
      additionalDescription:
        "Интеллектуальный бот-консультант, который помогает пользователям разобраться с функциями и возможностями синтезатора Korg Pa5X. Использует технологию RAG для поиска информации в технической документации и предоставления точных ответов на вопросы пользователей.",
      technologies: ["LLM", "RAG", "Bot", "Documentation", "Vector search"],
      color: "bg-indigo-100 text-indigo-600",
      status: "Технодемо",
      results: [
        "Консультирование по документации синтезатора",
        "Быстрый поиск информации в технических материалах",
        "Интеллектуальная обработка запросов пользователей",
        "Помощь в освоении функций синтезатора",
      ],
    },
    {
      id: 9,
      icon: <Monitor className="w-8 h-8" />,
      title: "Видеосервис распознавания действий человека",
      description:
        "Система компьютерного зрения для распознавания действий человека в видеопотоке с точностью до 95%.",
      additionalDescription:
        "Веб-сервис для распознавания движения человека на видео создан с целью автоматизированного обнаружения правомерных и неправомерных действий и профилактики инцидентов на охраняемых объектах и КПП. Разработан с помощью алгоритмов машинного зрения с использованием обучения ИИ-моделей на собственном датасете. Точность распознавания некоторых моделей достигает 92%, за счет использования комплексных метрик предсказания и использование математических вероятностей для принятия решения.",
      technologies: ["CV", "Security", "Video Analysis", "AI"],
      color: "bg-yellow-100 text-yellow-600",
      status: "Технодемо",
      results: [
        "Точность моделей до 95%",
        "Распознавание действий в реальном времени",
        "Автоматизированное обнаружение правомерных и неправомерных действий",
        "Профилактика инцидентов на охраняемых объектах",
        "Использование собственного датасета для обучения",
        "Комплексные метрики предсказания с математическими вероятностями",
      ],
    },
    {
      id: 10,
      icon: <Bot className="w-8 h-8" />,
      title: "Бот-ассистент для интернет магазинов + сайт",
      description:
        "Сайт с интеллектуальным ботом-ассистентом, помогающим с подбором товаров и формированием лендингов.",
      additionalDescription:
        "Был разработан сайт с интеллектуальным ботом-ассистентом. Данный бот представляет собой ИИ-модель дообученную на базе товаров интернет магазина, благодаря чему бот может консультировать клиентов по ассортименту, помогать с подбором продуктов для тех или иных блюд. Помимо этого добавлена интеллектуальная память, за счет чего нет необходимости каждый раз формулировать предложение с самого начала, достаточно дописать уточнение и бот все поймет. Также, для удобства, бот генерирует отдельный лендинг с релевантными товарами по вашему запросу. Бот достаточно универсален, подойдет под любой интернет магазин и не только. UI-часть разработана на HTML, CSS, JS. Бэкенд-часть и сервер написаны на Python с использованием Flask, Langchain, Faiss, OpenAI.",
      technologies: ["AI", "E-commerce", "Langchain", "Flask", "OpenAI", "HTML", "CSS", "JS"],
      color: "bg-purple-100 text-purple-600",
      status: "Технодемо",
      results: [
        "ИИ-бот, дообученный на базе ассортимента магазина",
        "Консультации по продуктам и подбору ингредиентов",
        "Интеллектуальная память для продолжения диалога",
        "Автоматическая генерация лендингов с релевантными товарами",
        "Универсальность — применим к любым интернет-магазинам",
        "Фронтенд: HTML, CSS, JavaScript",
        "Бэкенд: Python, Flask, Langchain, Faiss, OpenAI",
      ],
    }    
    ,
  ];


  return (
    <div className="pt-[140px] pb-20 px-4">
     <div className="max-w-4xl mx-auto">
        <Breadcrumb
          items={[
            { label: "Главная", href: "/" },
            { label: "Портфолио" },
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Наше портфолио
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Проекты, которые мы реализовали
          </p>
        </motion.div>

        {/* Коммерческие проекты */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Проекты реализованные или реализуемые в интересах заказчиков
          </h2>
          <div className="space-y-8">
            {commercialProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="project-card glass-strong rounded-2xl shadow-lg">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-6">
                      {/* Images */}
                      <div className="p-6">
                        {project.images && project.images.length > 0 && (
                          <Carousel images={project.images} className="mb-4" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className={`w-14 h-14 ${project.color} rounded-xl flex items-center justify-center mb-4`}
                          >
                            {project.icon}
                          </div>
                          <Badge
                            variant={
                              project.status.includes("Завершен")
                                ? "default"
                                : project.status.includes("MVP")
                                ? "secondary"
                                : "outline"
                            }
                          >
                            {project.status}
                          </Badge>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                          {project.title}
                        </h3>
                        <p
  className="text-gray-600 mb-4 leading-relaxed bg-gradient-to-r from-gray-100 to-gray-300 p-4 rounded-lg"
>
  {project.description}
</p>
<p
  className="text-gray-600 mb-4 leading-relaxed bg-gradient-to-r from-gray-100 to-gray-300 p-4 rounded-lg"
>
  {project.additionalDescription}
</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="space-y-2 text-sm text-gray-500">
                        
                          {project.clients && (
                            <div>
                              <strong>Клиенты:</strong>{" "}
                              {typeof project.clients === "object"
                                ? Object.entries(project.clients).map(([name, url], idx) => (
                                    <span key={idx}>
                                      {url ? (
                                        <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                      >
                                        {name}
                                      </a>
                                      ) : (
                                        name  
                                      )
                                      }
                                      {idx < Object.keys(project.clients).length - 1 && ", "}
                                    </span>
                                  ))
                                  // @ts-ignore
                                : project.clients.join(", ")}
                            </div>
                          )}
                          {project.media && (
                            <div>
                              <strong>Медиа:</strong>{" "}
                              {typeof project.media === "object"
                                ? Object.entries(project.media).map(([name, url], idx) => (
                                    <span key={idx}>
                                      <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                      >
                                        {name}
                                      </a>
                                      {idx < Object.keys(project.media).length - 1 && ", "}
                                    </span>
                                  ))
                                  // @ts-ignore
                                : project.media.join(", ")}
                            </div>
                          )}
                          {project.results && project.results.length > 0 && (
                            <div>
                              <strong>Результаты:</strong>
                              <ul className="list-disc pl-5">
                                {project.results.map((result, idx) => (
                                  <li key={idx}>{result}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {project.examples && project.examples.length > 0 && (
                            <div>
                              <strong>Примеры запросов:</strong>{" "}
                              {`"${project.examples.join('", "')}"`}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Техно-демо проекты */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Бесплатные проекты, внутренние проекты и техно-демо
          </h2>
          <div className="space-y-6">
            {demoProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="project-card glass-strong rounded-2xl shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 ${project.color} rounded-xl flex items-center justify-center mb-4`}
                      >
                        {project.icon}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {project.status}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {project.results && project.results.length > 0 && (
                      <div className="text-sm text-gray-500 mb-4">
                        <strong>Результаты:</strong>
                        <ul className="list-disc pl-5">
                          {project.results.map((result, idx) => (
                            <li key={idx}>{result}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.link && (
                      <div className="text-sm text-blue-600 flex items-center">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        <a
                          href={project.link.replace(/^@/, 'https://t.me/')}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.link}
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="glass-effect rounded-2xl p-8 shadow-lg"
>
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
    Наши клиенты
  </h2>

  <div className="overflow-hidden">
    <motion.div
      className="flex"
      animate={{ x: ['0%', '-50%'] }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        },
      }}
    >
      <div className="flex flex-nowrap gap-8 px-4">
        {[
          antantsBlack,
          lunettes,
          samokatWhite,
          screenstructor,
          ssauBlack,
          tbBlack,
          antantsBlack,
          lunettes,
          samokatWhite,
          screenstructor,
          ssauBlack,
          tbBlack,
        ].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Client Logo"
            className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
    </motion.div>
  </div>
</motion.div>
      </div>
    </div>
  );
};

export default Portfolio;