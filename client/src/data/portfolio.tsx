import React from "react";
import {
  Rocket,
  Stethoscope,
  Network,
  Monitor,
  MessageCircle,
  Brain,
} from "lucide-react";

import postamatImage1 from "@assets/postamat1.png";
import postamatImage2 from "@assets/postamat2.png";
import postamatImage3 from "@assets/postamat3.png";
import postamatImage4 from "@assets/postamat4.png";
import postamatImage5 from "@assets/postamat5.png";
import postamatImage6 from "@assets/postamat6.png";

import healthcareImage1 from "@assets/healthcare_image_1.png";
import healthcareImage2 from "@assets/healthcare_image_2.png";
import healthcareImage3 from "@assets/healthcare_image_3.png";

import prmImage1 from "@assets/prm_image_1.png";
import screencastImage1 from "@assets/screencast_image_1.png";
import screencastImage2 from "@assets/screencast_image_2.png";
import screencastImage3 from "@assets/screencast_image_3.png";

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
      "Статья 2":
        "https://oborot.ru/news/skolko-samokat-gotov-potratit-na-eksperimentalnuyu-dostavku-kvadrokopterami-v-tolyatti-i-kak-eto-vse-budet-rabotat-i236262.html",
    },
    results: [
      "ПО для встроенного компьютера постомата",
      "Объединение фронтенда, внешних сервисов и PLC-контроллеров",
      "Управление всей логикой и функциями постомата",
      "Прототип интерфейса для встроенного планшета",
      "Успешное тестирование первым лицом государства",
    ],
    images: [
      postamatImage1,
      postamatImage2,
      postamatImage3,
      postamatImage4,
      postamatImage5,
      postamatImage6,
    ],
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
    status: "Законченный MVP",
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
      "Personal Relationships Management System для управления персональными связями и эффективного нетворкинга с ИИ-поиском людей. Примеры запросов: \"занимается заказной разработкой в сфере ИИ\", \"специалист в data science\", \"связан с нефтянкой\", \"имеет отношение к высшему менеджменту Газпрома\", \"активный спикер на конференциях и форумах по бизнесу\", \"есть опыт разработки биржевых торговых терминалов\" и т.п.",
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
      "AI Search",
    ],
    clients: {
      "Бизнес-клуб «Атланты»": "https://atlanty.ru/",
    },
    color: "bg-purple-100 text-purple-600",
    status: "В разработке",
    results: [
      "Объединение всех контактов в единую базу",
      "Автоматическое обогащение карточек из открытых источников",
      "ИИ-поиск по произвольным запросам",
      "Эффективный нетворкинг и управление связями",
    ],
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
    clients: { ScreenStructor: "" },
    color: "bg-orange-100 text-orange-600",
    status: "В разработке",
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
];

export { commercialProjects, demoProjects };