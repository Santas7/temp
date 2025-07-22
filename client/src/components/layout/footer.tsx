import { Phone, Mail, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Левая колонка */}
          <div>
            <h3 className="text-2xl font-bold mb-2">LLM-tech</h3>
            <p className="text-gray-300 mb-4">
              Разработка ИИ и Backend решений для среднего и малого бизнеса.
            </p>
            <p className="text-gray-400 text-sm mb-1">
              © 2025 ООО "ЛЛМ Технолоджи".
            </p>
            <p className="text-gray-400 text-sm">
              ОГРН: 1256300017368 | ИНН: 6319267289 | КПП: 631901001
            </p>
          </div>

          {/* Средняя колонка */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              {[
                "Разработка ИИ-решений",
                "Backend-разработка", 
                "Чат-боты и AI-агенты",
                "Анализ данных",
                "Техническое консультирование"
              ].map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Правая колонка */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-300 mb-4">
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+79272035862" className="text-lightBlue-400 hover:text-lightBlue-300 no-underline">
                  +7 927 203-58-62
                </a>
              </p>
              <p className="flex items-center">
                <Send className="w-4 h-4 mr-2" />
                <a 
                  href="https://t.me/xtrueman" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lightBlue-400 hover:text-lightBlue-300 no-underline"
                >
                  @xtrueman (Telegram)
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a 
                  href="mailto:info@llm-tech.ru" 
                  className="text-lightBlue-400 hover:text-lightBlue-300 no-underline"
                >
                  info@llm-tech.ru
                </a>
              </p>
            </div>

            {/* Иконки мессенджеров */}
            <div className="flex space-x-4 mt-2">
              <a 
                href="https://t.me/xtrueman" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Send className="w-6 h-6" />
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
