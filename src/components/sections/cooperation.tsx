import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Cooperation = ({prefixBg}: {prefixBg: string}) => {
  const formats = [
    "Проектная работа",
    "Абонентское обслуживание",
    "Субподряд",
    "Техническое консультирование"
  ];

  return (
    <section className={`py-32 px-4 ${prefixBg}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Форматы сотрудничества
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите удобный для вас формат работы
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {formats.map((format, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-strong rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-800">{format}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cooperation;