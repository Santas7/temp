import { Settings } from "lucide-react";


const Hero = ({ prefixBg }: { prefixBg: string }) => {  
  return (
    <section
      className={`min-h-screen flex items-center justify-center pt-32 px-6 sm:px-10 ${prefixBg}`}
    >
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-8 py-16">
        {/* Label */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F1F1F1] to-[#FAFAFA] text-[#5B3EFF] px-5 py-2.5 rounded-full text-sm sm:text-base font-medium mb-8 shadow-sm backdrop-blur-md bg-opacity-30">
          <Settings size={18} />
          <span>Индивидуальная разработка LLM, AI и backend решений</span>
        </div>
        {/* Заголовок */}
        <div className="mb-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight flex justify-center items-center gap-6 flex-wrap text-center text-[#111827]">
            <span>LLM technology</span>
          </h1>
        </div>
        {/* Подзаголовок */}
        <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
          Команда энтузиастов в сфере AI и backend. Специализируемся на NLP, LLM,
          AI-агентах и системах распознавания речи.
        </p>
      </div>
    </section>
  );
};

export default Hero;
