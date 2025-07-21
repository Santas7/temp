import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const CTA = ({prefixBg}: {prefixBg: string}) => {
  return (
    <section className={`py-32 px-4  ${prefixBg}`}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Готовы начать проект?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Если у вас есть проект или предложение — свяжитесь с нами
          </p>

          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg"
          >
            <a
              href="https://t.me/xtrueman"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              Написать в Telegram
              <Send className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
