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
import FastAPIIcon from "@assets/tech-icons/fastapi.png";
import vLLMIcon from "@assets/tech-icons/vllm.png";
import llamaCppIcon from "@assets/tech-icons/llamacpp.png";
import hfIcon from "@assets/tech-icons/hf.png";
import scikitLearnIcon from "@assets/tech-icons/scikitlearn.png";
import nemoIcon from "@assets/tech-icons/nemo.png";
import ollamaIcon from "@assets/tech-icons/ollama.png";
import PEIcon from "@assets/tech-icons/pe.png";
import langChainIcon from "@assets/tech-icons/langchain.png";
import langGraphIcon from "@assets/tech-icons/langgraph.png";
import n8nIcon from "@assets/tech-icons/n8n.png";
import tokenizationIcon from "@assets/tech-icons/tokenization.png";
import SQLIcon from "@assets/tech-icons/sql.png";

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
  | "NoSQL"
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
  | "CI/CD";

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
  FastAPI: <img src={FastAPIIcon} alt="FastAPI" className="w-8 h-8" />,
  Swagger: <SiSwagger className="w-8 h-8 text-green-600" />,
  SQL: <img src={SQLIcon} className="w-8 h-8 text-blue-800" />,
  PostgreSQL: <SiPostgresql className="w-8 h-8 text-blue-800" />,
  MySQL: <SiMysql className="w-8 h-8 text-blue-600" />,
  "NoSQL": <SiMongodb className="w-8 h-8 text-green-500" />,
  vLLM: <img src={vLLMIcon} alt="vLLM" className="w-8 h-8" />,
  "llama.cpp": <img src={llamaCppIcon} alt="llama.cpp" className="w-8 h-8" />,
  HuggingFace: <img src={hfIcon} alt="HuggingFace" className="w-8 h-8" />,
  PyTorch: <SiPytorch className="w-8 h-8 text-red-500" />,
  "Scikit-Learn": <img src={scikitLearnIcon} alt="Scikit-Learn" className="w-8 h-8" />,
  Nemo: <img src={nemoIcon} alt="Nemo" className="w-8 h-8" />,
  Transformers: <Code className="w-8 h-8 text-orange-500" />,
  Ollama: <img src={ollamaIcon} alt="Ollama" className="w-8 h-8" />,
  LangChain: <img src={langChainIcon} alt="LangChain" className="w-8 h-8" />,
  LangGraph: <img src={langGraphIcon} alt="LangGraph" className="w-8 h-8" />,
  FAISS: <img src={n8nIcon} alt="FAISS" className="w-8 h-8" />, // Using n8n icon as placeholder
  "Prompt Engineering": <img src={PEIcon} alt="Prompt Engineering" className="w-8 h-8" />,
  n8n: <img src={n8nIcon} alt="n8n" className="w-8 h-8" />,
  Tokenization: <img src={tokenizationIcon} alt="Tokenization" className="w-8 h-8" />,
  Docker: <FaDocker className="w-8 h-8 text-blue-500" />,
  "CI/CD": <SiGitlab className="w-8 h-8 text-orange-600" />,
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
  "NoSQL",
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
  "CI/CD",
];

// Функция для безопасного получения иконки
export function getTechIcon(name: string): ReactElement {
  return techIcons[name as Technology] || <Code className="w-8 h-8 text-gray-400" />;
}