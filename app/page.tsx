import About from "@/component/About";
import Hero from "../component/Hero";
import Projects from "../component/Project";
import Sertificate from "../component/Sertificate";
import Timeline from "../component/Timeline";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <About />
        <Projects />
        <Sertificate />
        <Timeline />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
