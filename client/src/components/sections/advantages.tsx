import { motion } from "framer-motion";
import { advantages } from "@/data/advantages";

const Advantages = ({prefixBg}: {prefixBg: string}) => {
  return (
    <section className={`py-16 px-4 ${prefixBg}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Что нас отличает
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предлагаем гибкие форматы сотрудничества с высокой скоростью реализации и конкурентными ценами
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 border-8 border-gray-100"
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