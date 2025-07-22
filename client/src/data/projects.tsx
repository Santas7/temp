import { PackageSearch, Mic, Users, ScreenShare } from "lucide-react";
import type { ReactElement } from "react";

interface Project {
  icon: ReactElement;
  title: string;
  description: string;
  tags: string[];
}

export const projectList: Project[] = [
  {
    icon: <PackageSearch className="w-6 h-6 text-indigo-500" />,
    title: "ПО для дрон-постаматов",
    description:
      "Пилотный проект завода гражданских дронов «Транспорт будущего» и сервиса доставки «Самокат». Автоматические постаматы, посылки на которые доставляются дронами. Первый в России проект подобного рода. Реализовано встроенное ПО для постомата, объединяющее фронтенд, внешние сервисы и PLC-контроллеры в единую систему.",
    tags: ["Python", "IoT", "Frontend", "PLC"],
  },
  {
    icon: <Mic className="w-6 h-6 text-indigo-500" />,
    title: "Система контроля бизнес-процессов",
    description:
      "Транскрипция разговоров врачей с пациентами и сотрудников колл-центра с клиентами, оценка соответствия диалогов корпоративным стандартам, статистика и динамика.",
    tags: ["ИИ", "Speech-to-Text", "Аналитика"],
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-500" />,
    title: "PRM-система с ИИ-поиском",
    description:
      "Personal Relationships Management System — система для эффективного нетворкинга и управления персональными связями. Объединение всех контактов клиента, обогащение карточек, интеллектуальный поиск людей по произвольному запросу.",
    tags: ["ИИ", "CRM", "Поиск", "API"],
  },
  {
    icon: <ScreenShare className="w-6 h-6 text-indigo-500" />,
    title: "Скринкаст-рекордер",
    description:
      "Desktop-программа для записи экрана и любых действий пользователя (клавиатура, мышь). Часть инновационной обучающей платформы, основанной на web-эмуляции десктоп-приложений.",
    tags: ["Desktop", "Recording", "Обучение"],
  },
];
