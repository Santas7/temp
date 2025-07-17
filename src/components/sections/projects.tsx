import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Rocket, Stethoscope, MessageCircle, Monitor, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "ПО для дрон-постаматов",
      description: "Автоматические постоматы для приёма посылок с дронов. Первый в России проект такого рода.",
      status: "MVP",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Система анализа разговоров",
      description: "Транскрипция и оценка соответствия диалогов врачей корпоративным стандартам.",
      status: "Завершен",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Telegram-бот для расшифровки",
      description: "Расшифровка голосовых сообщений и аудиодорожек в Telegram.",
      status: "Техно-демо",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Desktop-приложение",
      description: "Запись скринкастов и действий пользователя для инновационной обучающей платформы.",
      status: "Завершен",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const examples = [
    {
      title: "Автоматизация техподдержки",
      description: "ИИ, который грамотно отвечает на вопросы клиентов, имеет интеграции с внутренними системами, базами знаний и различными API"
    },
    {
      title: "Обработка и анализ данных",
      description: "Работа с текстами, аудио, видео и автоматизированная аналитика с применением ИИ/ML"
    }
  ];

  return (
    <section className="py-32 px-4 section-fade bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Примеры идеальных задач
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Вот что мы умеем делать лучше всего
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-strong rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{example.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{example.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Недавние проекты</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-strong rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 ${project.color} rounded-xl flex items-center justify-center mb-4`}>
                        {project.icon}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {project.status}
                      </Badge>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium text-lg"
          >
            <a href="/portfolio" className="flex items-center">
              Посмотреть все проекты
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;