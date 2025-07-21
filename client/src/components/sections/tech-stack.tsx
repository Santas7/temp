import { motion } from "framer-motion";
import {
  FaPython,
  FaJsSquare,
  FaReact,
  FaAngular,
  FaHtml5,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSwagger,
  SiPytorch,
  SiGitlab,
} from "react-icons/si";
import { Code } from "lucide-react"; // Fallback icon for technologies without specific logos

// Mapping of technologies to their respective icons
const techIcons = {
  Python: <FaPython className="w-8 h-8 text-blue-600" />,
  JavaScript: <FaJsSquare className="w-8 h-8 text-yellow-500" />,
  Typescript: <SiTypescript className="w-8 h-8 text-blue-700" />,
  React: <FaReact className="w-8 h-8 text-cyan-500" />,
  Angular: <FaAngular className="w-8 h-8 text-red-600" />,
  Redux: <SiRedux className="w-8 h-8 text-purple-600" />,
  "HTML/CSS": <FaHtml5 className="w-8 h-8 text-orange-600" />,
  Flask: <SiFlask className="w-8 h-8 text-black" />,
  FastAPI: <Code className="w-8 h-8 text-green-600" />, // Fallback: No FastAPI icon
  Swagger: <SiSwagger className="w-8 h-8 text-green-600" />,
  SQL: <SiPostgresql className="w-8 h-8 text-blue-800" />, // Using PostgreSQL icon as proxy
  PostgreSQL: <SiPostgresql className="w-8 h-8 text-blue-800" />,
  MySQL: <SiMysql className="w-8 h-8 text-blue-600" />,
  "NoSQL (MongoDB, Redis)": <SiMongodb className="w-8 h-8 text-green-500" />, // MongoDB as primary NoSQL icon
  vLLM: <Code className="w-8 h-8 text-indigo-500" />, // Fallback: No vLLM icon
  "llama.cpp": <Code className="w-8 h-8 text-indigo-500" />, // Fallback: No llama.cpp icon
  HuggingFace: <Code className="w-8 h-8 text-orange-500" />, // Fallback: No HuggingFace icon
  PyTorch: <SiPytorch className="w-8 h-8 text-red-500" />,
  "Scikit-Learn": <Code className="w-8 h-8 text-yellow-600" />, // Fallback: No Scikit-Learn icon
  Nemo: <Code className="w-8 h-8 text-blue-500" />, // Fallback: No Nemo icon
  Transformers: <Code className="w-8 h-8 text-orange-500" />, // Fallback: Using same as HuggingFace
  Ollama: <Code className="w-8 h-8 text-purple-500" />, // Fallback: No Ollama icon
  LangChain: <Code className="w-8 h-8 text-teal-500" />, // Fallback: No LangChain icon
  LangGraph: <Code className="w-8 h-8 text-teal-500" />, // Fallback: No LangGraph icon
  FAISS: <Code className="w-8 h-8 text-red-500" />, // Fallback: No FAISS icon
  "Prompt Engineering": <Code className="w-8 h-8 text-blue-600" />, // Fallback: No specific logo
  n8n: <Code className="w-8 h-8 text-pink-500" />, // Fallback: No n8n icon
  Tokenization: <Code className="w-8 h-8 text-blue-600" />, // Fallback: No specific logo
  Docker: <FaDocker className="w-8 h-8 text-blue-500" />,
  "GitLab CI/CD": <SiGitlab className="w-8 h-8 text-orange-600" />,
};

const technologies = [
  "Python",
  "JavaScript",
  "Typescript",
  "React",
  "Angular",
  "Redux",
  "HTML/CSS",
  "Flask",
  "FastAPI",
  "Swagger",
  "SQL",
  "PostgreSQL",
  "MySQL",
  "NoSQL (MongoDB, Redis)",
  "vLLM",
  "llama.cpp",
  "HuggingFace",
  "PyTorch",
  "Scikit-Learn",
  "Nemo",
  "Transformers",
  "Ollama",
  "LangChain",
  "LangGraph",
  "FAISS",
  "Prompt Engineering",
  "n8n",
  "Tokenization",
  "Docker",
  "GitLab CI/CD",
];
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
            Используем лучшие инструменты из мира разработки и ИИ
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