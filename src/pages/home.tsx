import { useEffect } from "react";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Specializations from "@/components/sections/specializations";
import Founder from "@/components/sections/founder";
import Projects from "@/components/sections/projects";
import Clients from "@/components/sections/clients";
import Advantages from "@/components/sections/advantages";
import Cooperation from "@/components/sections/cooperation";
import Hiring from "@/components/sections/hiring";

const Home = () => {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.section-fade').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Specializations />
      <Founder />
      <Projects />
      <Clients />
      <Advantages />
      <Cooperation />
      <Hiring />
    </>
  );
};

export default Home;
