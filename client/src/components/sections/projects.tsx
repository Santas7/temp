import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { projectList } from "@/data/projects";

const Projects = ({prefixBg}: {prefixBg: string}) => {
  return (
    <section className={`py-32 px-4  ${prefixBg}`}>
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <h3 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Наши проекты
      </h3>
      <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
        Уже реализованные или реализуемые сейчас проекты:
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="flex flex-col justify-between w-full h-full bg-white rounded-3xl shadow-md hover:shadow-lg transition-all border-8 border-gray-100">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-indigo-100 rounded-xl p-3">
                    {project.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                </div>
                <p className="text-gray-700 leading-relaxed flex-grow mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <Button
        asChild
        size="lg"
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium text-lg"
      >
        <a href="/portfolio" className="flex items-center">
          Посмотреть все проекты
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </Button>
    </motion.div>
  </div>
</section>

  );
};

export default Projects;
