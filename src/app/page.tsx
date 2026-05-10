import Navigation from "@/app/components/Navigation";
import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import Projects from "@/app/sections/Projects";
import Skills from "@/app/sections/Skills";
import Experience from "@/app/sections/Experience";
import Hobbies from "@/app/sections/Hobbies";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";
import ScrollToTop from "@/app/components/ScrollToTop";

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
