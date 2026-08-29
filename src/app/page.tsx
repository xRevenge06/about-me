import Field from "@/components/Field";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import StickyWork from "@/components/StickyWork";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Field />
      <div className="shell">
        <Navbar />
        <Sidebar />
        <div className="main">
          <h1 className="sr">Tufan Kiraz — Full Stack Developer</h1>
          <Hero />
          <About />
          <Skills />
          <StickyWork />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
