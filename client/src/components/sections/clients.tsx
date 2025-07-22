import { motion } from "framer-motion";
import { clients } from "@/data/clients";

const Clients = ({ prefixBg }: { prefixBg: string }) => {
  return (
    <section className={`py-32 px-4 ${prefixBg}`}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Наши клиенты
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Компании, которые доверяют нам свои проекты:
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-8 justify-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 w-[165px] flex-shrink-0 h-[280px] flex flex-col justify-between"
            >
              <div>
                <div className="w-24 h-16 mx-auto mb-6 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">{client.name}</h3>
              </div>
              <p className="text-gray-600">{client.industry}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
