import { motion } from "framer-motion";
import { Brain, MessageCircle, BarChart3, Server, Check, X } from "lucide-react";

const Specializations = () => {
  const specializations = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Искусственный интеллект и LLM",
      description: "Автоматизация бизнес-процессов с применением больших языковых моделей и других ИИ-технологий",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Интеллектуальные чат-боты",
      description: "AI-агенты для автоматизации поддержки клиентов или внутренней службы поддержки",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Обработка данных",
      description: "Автоматизированный анализ текста, аудио, видео и принятие решений на основе данных",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend-разработка",
      description: "Любые серверные решения с нетривиальной логикой, интеграцию с внешними системами",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const suitableOrders = [
    "Фокус на ИИ (ML, LLM) и/или backend",
    "Любые чат-боты (Telegram или web)",
    "Frontend как дополнение к backend",
    "Бюджет от 300k рублей"
  ];

  const unsuitableOrders = [
    "Задачи «сделать красиво» без сложной логики",
    "Бухгалтерия, 1С, SAP, enterprise-интеграции",
    "Заказы с бюджетом менее 300k"
  ];

  return (
    <section className="py-20 px-4 section-fade">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Наши специализации</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {specializations.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-6 shadow-lg"
            >
              <div className={`w-12 h-12 ${spec.color} rounded-xl flex items-center justify-center mb-4`}>
                {spec.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{spec.title}</h3>
              <p className="text-gray-600">{spec.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Какие заказы нам интересны</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-strong rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
                <Check className="w-6 h-6 mr-2" />
                Нам подходят
              </h3>
              <ul className="space-y-4">
                {suitableOrders.map((order, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    {order}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-strong rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
                <X className="w-6 h-6 mr-2" />
                Нам не подходят
              </h3>
              <ul className="space-y-4">
                {unsuitableOrders.map((order, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    {order}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Specializations;
