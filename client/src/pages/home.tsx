import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Specializations from "@/components/sections/specializations";
import Founder from "@/components/sections/founder";
import Projects from "@/components/sections/projects";
import Clients from "@/components/sections/clients";
import Advantages from "@/components/sections/advantages";
import Cooperation from "@/components/sections/cooperation";
import Hiring from "@/components/sections/hiring";
import CTA from "@/components/sections/cta";
import TechStack from "@/components/sections/tech-stack";
import Favorite from "@/components/sections/favorite";

const Home = () => {
  return (
    <>
    <Hero prefixBg="bg-gradient-to-b from-[#eceeee] to-[#f5f5f5]" />
    <About prefixBg="bg-gradient-to-b from-[#f5f5f5] to-[#F2F2F2]" />
    <Specializations prefixBg="bg-gradient-to-b from-[#F2F2F2] to-[#fafafa]" />
    <Founder prefixBg="bg-gradient-to-b from-[#fafafa] to-[#ffffff]" />
  
    <Advantages prefixBg="bg-gradient-to-b from-[#ffffff] to-[#f7f7f7]" />
    <Cooperation prefixBg="bg-gradient-to-b from-[#f7f7f7] to-[#f5f5f5]" />
  
    <Favorite prefixBg="bg-gradient-to-b from-[#f5f5f5] to-[#fafafa]" />
    <Projects prefixBg="bg-gradient-to-b from-[#fafafa] to-[#eceeee]" />
    <Clients prefixBg="bg-gradient-to-b from-[#eceeee] to-[#f5f5f5]" />
    
    <CTA prefixBg="bg-gradient-to-b from-[#f5eaff] to-[#e8d7ff]" />
    
    <TechStack prefixBg="bg-gradient-to-b from-[#e8d7ff] to-[#ffffff]" />
    <Hiring prefixBg="bg-gradient-to-b from-[#ffffff] to-[#f5f5f5]" />
  </>
  


  );
};

export default Home;
