import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

const Hiring = () => {
  return (
    <section className="py-32 px-4 section-fade bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-12 shadow-xl"
        >
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Users className="w-10 h-10 text-purple-600" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Ищем людей в команду
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Если вы опытный Python-разработчик с интересом к ИИ или специалист по ML/LLM/NLP — мы будем рады знакомству!
          </p>
          
          <Button 
            asChild
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-medium text-lg"
          >
            <a href="/vacancies" className="flex items-center">
              Посмотреть вакансии
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hiring;