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
} from "lucide-react";

import droneStationImage1 from "@assets/image_1752742122090.png";
import droneStationImage2 from "@assets/image_1752742128225.png";
import droneStationImage3 from "@assets/image_1752742133397.png";
import droneImage1 from "@assets/image_1752742138453.png";
import droneImage2 from "@assets/image_1752742140087.png";
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
        "Пилотный проект завода гражданских дронов «Транспорт будущего» и сервиса доставки «Самокат». Автоматический постамат, который умеет принимать посылки с дрона. Первый в России проект подобного рода.",
      fullDescription:
        "Суть проекта — автоматический постамат, который умеет не только автономно выдавать посылки, но и принимать посылки с дрона. Протестировано в работе первым лицом государства.",
      technologies: ["IoT", "Backend", "Hardware", "Frontend"],
      clients: ["Транспорт будущего", "Самокат"],
      color: "bg-blue-100 text-blue-600",
      status: "Законченный MVP",
      media: ["Статья 1", "Статья 2"],
      results: [
        "ПО для встроенного компьютера постомата",
        "Объединение фронтенда, внешних сервисов и PLC-контроллеров",
        "Управление всей логикой и функциями постомата",
        "Прототип интерфейса для встроенного планшета",
        "Успешное тестирование первым лицом государства",
      ],
      images: [droneStationImage1, droneStationImage2, droneStationImage3, droneImage1, droneImage2],
    },
    {
      id: 2,
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Система контроля соблюдения бизнес-процессов на базе ИИ",
      description:
        "Система для Оптических сетей с транскрипцией разговоров врачей с пациентами и оценкой соответствия корпоративным стандартам.",
      fullDescription:
        "Комплексная система для медицинских учреждений, которая автоматически анализирует качество общения врачей с пациентами. Включает модули транскрипции речи в текст, оценки соответствия разговоров медицинским стандартам, сбора статистики и отслеживания динамики изменений.",
      technologies: ["Speech-to-Text", "LLM", "Analytics", "AI", "Healthcare"],
      clients: ["Роскошное зрение"],
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
      fullDescription:
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
        "AI Search",
      ],
      clients: ["Бизнес-клуб «Атланты»"],
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
      fullDescription:
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
      clients: ["ScreenStructor"],
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
      fullDescription:
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
      fullDescription:
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
      fullDescription:
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
      fullDescription:
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
      fullDescription:
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
  ];

  // const clients = [
  //   { name: "Транспорт будущего", industry: "Дроны и логистика" },
  //   { name: "Самокат", industry: "Доставка" },
  //   { name: "Роскошное зрение", industry: "Медицина" },
  //   { name: "ScreenStructor", industry: "EdTech" },
  //   { name: "Самарский университет", industry: "Образование" },
  //   { name: "Бизнес-клуб Атланты", industry: "Бизнес-сообщество" },
  // ];

  return (
    <div className="pt-[140px] pb-20 px-4">
      <div className="max-w-6xl mx-auto">
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
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {project.description}
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
                          {project.clients && project.clients.length > 0 && (
                            <div>
                              <strong>Клиенты:</strong>{" "}
                              {project.clients.join(", ")}
                            </div>
                          )}
                          {project.media && project.media.length > 0 && (
                            <div>
                              <strong>Медиа:</strong> {project.media.join(", ")}
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
                        {project.link}
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