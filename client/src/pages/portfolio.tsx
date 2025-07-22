// @ts-nocheck
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel } from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";

import { commercialProjects, demoProjects } from "@/data/portfolio";
import Clients from "@/components/sections/clients";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[140px] pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Наше портфолио
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Проекты, которые мы реализовали
          </p>
        </motion.div>

        {/* Коммерческие проекты */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Проекты реализованные или реализуемые в интересах заказчиков
          </h2>
          <div className="space-y-8">
            {commercialProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="project-card rounded-2xl shadow-lg border-8 border-gray-100">
                  <CardContent className="p-0">
                    <div className="flex flex-col gap-6">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className={`w-14 h-14 ${project.color} rounded-xl flex items-center justify-center mb-4`}
                          >
                            {project.icon}
                          </div>
                          <Badge
                            variant={
                              project.status.includes("Завершен")
                                ? "default"
                                : project.status.includes("MVP")
                                ? "secondary"
                                : "outline"
                            }
                            className="text-sm"
                          >
                            {project.status}
                          </Badge>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed bg-gradient-to-r from-gray-100 to-gray-300 p-4 rounded-lg">
                          {project.description}
                        </p>
                        <p className="text-gray-600 mb-4 leading-relaxed bg-gradient-to-r from-gray-100 to-gray-300 p-4 rounded-lg">
                          {project.additionalDescription}
                          {project.examples?.length > 0 && (
                            <>
                              <br />
                              <strong>Примеры запросов:</strong>{" "}
                              {`"${project.examples.join('", "')}"`}
                            </>
                          )}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-base"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="space-y-2 text-base text-gray-600">
                          {project.clients && (
                            <div>
                              <strong>Клиенты:</strong>{" "}
                              {typeof project.clients === "object"
                                ? Object.entries(project.clients).map(
                                    ([name, url], idx) => (
                                      <span key={idx}>
                                        {url ? (
                                          <a
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                          >
                                            {name}
                                          </a>
                                        ) : (
                                          name
                                        )}
                                        {idx <
                                          Object.keys(project.clients).length -
                                            1 && ", "}
                                      </span>
                                    )
                                  )
                                : project.clients.join(", ")}
                            </div>
                          )}

                          {project.media && (
                            <div className="text-base">
                              <strong>Медиа:</strong>{" "}
                              {typeof project.media === "object"
                                ? Object.entries(project.media).map(
                                    ([name, url], idx) => (
                                      <span key={idx}>
                                        <a
                                          href={url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-blue-600 hover:underline"
                                        >
                                          {name}
                                        </a>
                                        {idx <
                                          Object.keys(project.media).length -
                                            1 && ", "}
                                      </span>
                                    )
                                  )
                                : project.media.join(", ")}
                            </div>
                          )}

                          {project.results?.length > 0 && (
                            <div className="text-base">
                              <strong>Результаты:</strong>
                              <ul className="list-disc pl-5">
                                {project.results.map((result, idx) => (
                                  <li key={idx}>{result}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Images */}
                      <div className="p-6">
                        {project.images && project.images.length > 0 && (
                          <Carousel
                            images={project.images}
                            imageClassName="object-contain max-h-[500px] w-full"
                            className="mb-4"
                          />
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Демо проекты */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Бесплатные проекты, внутренние проекты и техно-демо
          </h2>
          <div className="space-y-6">
            {demoProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="project-card border-8 border-gray-100 rounded-2xl shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 ${project.color} rounded-xl flex items-center justify-center mb-4`}
                      >
                        {project.icon}
                      </div>
                      <Badge variant="outline" className="text-sm">
                        {project.status}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-base"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {project.results?.length > 0 && (
                      <div className="text-base text-gray-600 mb-4">
                        <strong>Результаты:</strong>
                        <ul className="list-disc pl-5">
                          {project.results.map((result, idx) => (
                            <li key={idx}>{result}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.link && (
                      <div className="text-sm text-blue-600 flex items-center">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        <a
                          href={project.link.replace(/^@/, "https://t.me/")}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.link}
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Clients prefixBg="" />
    </div>
  );
};

export default Portfolio;