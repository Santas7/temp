import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 px-6 section-fade">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-20">О компании</h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-10 shadow-2xl mb-20 border border-gray-100/50"
        >
          <p className="text-lg md:text-xl text-gray-700 leading-loose mb-8 text-justify">
            <strong>LLM technology</strong> — команда энтузиастов искусственного интеллекта и backend-разработки. 
            Мы верим, что технологии ИИ способны улучшать мир и повышать эффективность бизнеса.
          </p>
          
          <p className="text-lg md:text-xl text-gray-700 leading-loose mb-8 text-justify">
            Если вы малый или средний бизнес, <strong className="text-blue-600 bg-blue-50 px-2 py-1 rounded-md">мы можем решить для вас почти любую задачу</strong> в области ИИ или backend-разработки.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="bg-white/50 rounded-xl p-6 transition-transform hover:scale-105">
              <p className="text-sm text-gray-600 mb-3">Работаем с:</p>
              <p className="text-xl font-bold text-gray-800">декабря 2024</p>
            </div>
            <div className="bg-white/50 rounded-xl p-6 transition-transform hover:scale-105">
              <p className="text-sm text-gray-600 mb-3">Официально зарегистрированы:</p>
              <p className="text-xl font-bold text-gray-800">15.07.2025</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;