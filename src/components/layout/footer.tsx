import { Phone, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  const services = [
    "Разработка ИИ-решений",
    "Backend-разработка", 
    "Чат-боты и AI-агенты",
    "Анализ данных",
    "Техническое консультирование"
  ];

  const techStack = [
    "Python", "JavaScript", "TypeScript", "React", "Angular", "Redux", "HTML/CSS",
    "Flask", "FastAPI", "SQL", "PostgreSQL", "MySQL", "MongoDB", "Redis",
    "vLLM", "llama.cpp", "HuggingFace", "PyTorch", "Scikit-Learn", "Transformers",
    "LangChain", "LangGraph", "FAISS", "Prompt Engineering", "Docker", "Kubernetes"
  ];

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ООО "ЛЛМ технолоджи"</h3>
            <p className="text-gray-300 mb-4">
              Разработка ИИ-решений и backend для малого и среднего бизнеса
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://t.me/xtrueman" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a 
                href="tel:+79272035862" 
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a 
                href="mailto:info@llm-tech.ru" 
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +7 927 203-58-62
              </p>
              <p className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                @xtrueman (Telegram)
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@llm-tech.ru
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-gray-400 text-sm mb-4">
            <p className="font-semibold mb-2">Технологический стек:</p>
            <p className="leading-relaxed">
              {techStack.join(" · ")}
            </p>
          </div>
          <div className="text-center text-gray-400 text-sm">
            <p>© 2025 ООО "ЛЛМ технолоджи". Все права защищены.</p>
            <p className="mt-1">ОГРН: 1256300017368 | ИНН: 6319267289 | КПП: 631901001</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
