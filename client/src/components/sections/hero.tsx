import { Settings } from "lucide-react";

const Hero = ({ prefixBg }: { prefixBg: string }) => {
  return (
    <section className={`pt-64 pb-40 px-6 sm:px-10 ${prefixBg}`}>
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-8">
        {/* Label */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F1F1F1] to-[#FAFAFA] text-[#5B3EFF] px-5 py-2 rounded-full text-sm sm:text-base font-medium mb-6 shadow-sm backdrop-blur-md bg-opacity-30">
          <Settings size={18} />
          <span>Индивидуальная разработка LLM, AI и backend решений</span>
        </div>

        {/* Заголовок */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#111827] mb-4">
          LLM technology
        </h1>

        {/* Подзаголовок */}
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          IT-компания по заказной разработке высокотехнологичного ПО для среднего и малого бизнеса. Специализируемся на NLP, LLM,
          AI-агентах и системах распознавания речи.
        </p>
      </div>
    </section>
  );
};

export default Hero;
