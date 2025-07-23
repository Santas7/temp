import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { formats } from "@/data/formats";

// Рабочие иконки из lucide-react
import {
  Star,
  Handshake,
  Rocket,
  Users,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

// Используем разнообразные иконки
const icons = [
  <Star className="w-10 h-10 text-blue-500" />,
  <Handshake className="w-10 h-10 text-green-500" />,
  <Rocket className="w-10 h-10 text-purple-500" />,
  <Users className="w-10 h-10 text-orange-500" />,
  <Briefcase className="w-10 h-10 text-rose-500" />,
  <ShieldCheck className="w-10 h-10 text-teal-500" />,
];

const Cooperation = ({ prefixBg }: { prefixBg: string }) => {
  return (
    <section className={`py-16 px-4 ${prefixBg}`}>
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Форматы сотрудничества
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите удобный для вас формат работы:
          </p>
        </motion.div>

        {/* Сетка карточек */}
        <div className="grid md:grid-cols-2 gap-8">
          {formats.map((format, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white/60 backdrop-blur shadow-lg hover:shadow-xl transition-all duration-300 group">
                {/* Декоративный круг */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full opacity-10 group-hover:opacity-20 transition-all duration-300" />

                <CardContent className="p-8 text-center flex flex-col items-center gap-4">
                  {/* Иконка */}
                  {icons[index % icons.length]}
                  {/* Название формата */}
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