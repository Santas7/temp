import { motion } from "framer-motion";
import { Brain, MessageCircle, BarChart3, Server, Check, X } from "lucide-react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa6";

const Specializations = ({prefixBg}: {prefixBg: string}) => {
  const specializations = [
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

  return (
    <section className={`py-20 px-4 ${prefixBg} `}>
      
    <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-16">
      Наша специализация
    </h2>

    <div className="grid md:grid-cols-2 gap-8 mb-16">
  {specializations.map((spec, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="rounded-[40px] p-6 shadow-lg h-full flex flex-col border border-8 border-gray-100 transition-all duration-300 "
    >
      <div
        className={`w-12 h-12 ${spec.color} rounded-xl flex items-center justify-center mb-4`}
      >
        {spec.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
        {spec.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 flex-grow">
        {spec.description}
      </p>
    </motion.div>
  ))}
</div>


        

      </div>
    </section>
  );
};

export default Specializations;
