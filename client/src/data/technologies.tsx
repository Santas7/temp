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
import { Code } from "lucide-react";
import type { ReactElement } from "react";

// Тип всех поддерживаемых технологий
type Technology =
  | "Python"
  | "JavaScript"
  | "Typescript"
  | "React"
  | "Angular"
  | "Redux"
  | "HTML/CSS"
  | "Flask"
  | "FastAPI"
  | "Swagger"
  | "SQL"
  | "PostgreSQL"
  | "MySQL"
  | "NoSQL (MongoDB, Redis)"
  | "vLLM"
  | "llama.cpp"
  | "HuggingFace"
  | "PyTorch"
  | "Scikit-Learn"
  | "Nemo"
  | "Transformers"
  | "Ollama"
  | "LangChain"
  | "LangGraph"
  | "FAISS"
  | "Prompt Engineering"
  | "n8n"
  | "Tokenization"
  | "Docker"
  | "GitLab CI/CD";

// Основная мапа: технология => иконка
export const techIcons: Record<Technology, ReactElement> = {
  Python: <FaPython className="w-8 h-8 text-blue-600" />,
  JavaScript: <FaJsSquare className="w-8 h-8 text-yellow-500" />,
  Typescript: <SiTypescript className="w-8 h-8 text-blue-700" />,
  React: <FaReact className="w-8 h-8 text-cyan-500" />,
  Angular: <FaAngular className="w-8 h-8 text-red-600" />,
  Redux: <SiRedux className="w-8 h-8 text-purple-600" />,
  "HTML/CSS": <FaHtml5 className="w-8 h-8 text-orange-600" />,
  Flask: <SiFlask className="w-8 h-8 text-black" />,
  FastAPI: <Code className="w-8 h-8 text-green-600" />,
  Swagger: <SiSwagger className="w-8 h-8 text-green-600" />,
  SQL: <SiPostgresql className="w-8 h-8 text-blue-800" />,
  PostgreSQL: <SiPostgresql className="w-8 h-8 text-blue-800" />,
  MySQL: <SiMysql className="w-8 h-8 text-blue-600" />,
  "NoSQL (MongoDB, Redis)": <SiMongodb className="w-8 h-8 text-green-500" />,
  vLLM: <Code className="w-8 h-8 text-indigo-500" />,
  "llama.cpp": <Code className="w-8 h-8 text-indigo-500" />,
  HuggingFace: <Code className="w-8 h-8 text-orange-500" />,
  PyTorch: <SiPytorch className="w-8 h-8 text-red-500" />,
  "Scikit-Learn": <Code className="w-8 h-8 text-yellow-600" />,
  Nemo: <Code className="w-8 h-8 text-blue-500" />,
  Transformers: <Code className="w-8 h-8 text-orange-500" />,
  Ollama: <Code className="w-8 h-8 text-purple-500" />,
  LangChain: <Code className="w-8 h-8 text-teal-500" />,
  LangGraph: <Code className="w-8 h-8 text-teal-500" />,
  FAISS: <Code className="w-8 h-8 text-red-500" />,
  "Prompt Engineering": <Code className="w-8 h-8 text-blue-600" />,
  n8n: <Code className="w-8 h-8 text-pink-500" />,
  Tokenization: <Code className="w-8 h-8 text-blue-600" />,
  Docker: <FaDocker className="w-8 h-8 text-blue-500" />,
  "GitLab CI/CD": <SiGitlab className="w-8 h-8 text-orange-600" />,
};

// Массив доступных технологий
export const technologies: Technology[] = [
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

// Функция для безопасного получения иконки
export function getTechIcon(name: string): ReactElement {
  return techIcons[name as Technology] || <Code className="w-8 h-8 text-gray-400" />;
}
