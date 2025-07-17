import { motion } from "framer-motion";
import founderPhoto from "@assets/owner_1752740690388.png";

const Founder = () => {
  return (
    <section className="py-20 px-4 section-fade">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src={founderPhoto} 
                  alt="Валерий Студенников" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Основатель — Валерий Студенников
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="text-lg flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  Со-основатель, ex-CTO и руководитель разработки REG.RU
                </p>
                <p className="text-lg flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  Создал и руководил отделом анализа данных в REG.RU
                </p>
                <p className="text-lg flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  3,5 года преподавал IT-дисциплины в Самарском университете
                </p>
                <p className="text-lg flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  В 2024 году запустил <strong>LLM-tech</strong> с фокусом на AI-решения
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
