import { Brain, MessageCircle, BarChart3, Server } from "lucide-react";
import type { ReactElement } from "react";

interface Specialization {
  icon: ReactElement;
  title: string;
  description: string;
  color: string;
}

export const specializations: Specialization[] = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Искусственный интеллект и LLM",
    description:
      "Автоматизация бизнес-процессов с применением больших языковых моделей и других ИИ-технологий",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Интеллектуальные чат-боты",
    description:
      "AI-агенты для автоматизации поддержки клиентов или внутренней службы поддержки",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Обработка данных",
    description:
      "Автоматизированный анализ текста, аудио, видео и принятие решений на основе данных",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Backend-разработка",
    description:
      "Любые серверные решения с нетривиальной логикой, интеграцию с внешними системами",
    color: "bg-orange-100 text-orange-600",
  },
];
