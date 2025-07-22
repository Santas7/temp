import { motion } from "framer-motion";
import { technologies, techIcons } from "@/data/technologies";

const TechStack = ({ prefixBg }: { prefixBg: string }) => {
  return (
    <section className={`py-12 px-4 ${prefixBg}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-2">
            Технологический стек
          </h2>
          <p className="text-sm text-gray-600">
            Используем лучшие инструменты из мира разработки и ИИ:
          </p>
        </motion.div>

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.02 }}
              viewport={{ once: true }}
              className="relative rounded-lg border border-gray-200 bg-white p-2 h-20 shadow-sm hover:shadow-md transition border-8 border-gray-50"
            >
              <div className="absolute top-1 right-1">
                {/* @ts-ignore */}
                {techIcons[tech] || <Code className="w-5 h-5 text-indigo-500" />}
              </div>
              <p className="absolute bottom-1 left-1 text-gray-800 font-medium text-xs">
                {tech}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default TechStack;