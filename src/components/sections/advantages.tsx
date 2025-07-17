import { motion } from "framer-motion";
import { Target, Zap, DollarSign } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Гибкость",
      description: "Работаем по модели проекта, абонентского обслуживания или субподряда",
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

  return (
    <section className="py-32 px-4 section-fade bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Что нас отличает
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Почему клиенты выбирают именно нас
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 ${advantage.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                {advantage.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{advantage.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;