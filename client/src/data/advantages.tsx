import { Target, Zap, DollarSign } from "lucide-react"; 

import type { ReactElement } from "react";

interface Advantage {
  icon: ReactElement;
  title: string;
  description: string;
  color: string;
}

export const advantages: Advantage[] = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Гибкость",
    description: "Проектная работа, абонентское обслуживание или субподряд",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Высокая скорость",
    description: "Минимум времени от первого контакта до старта работ",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Цены ниже рынка",
    description: "Приоритет — портфель успешных кейсов",
    color: "bg-green-100 text-green-600"
  }
];
