import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <main className="page">
        <h1 className="sr">Tufan Kiraz · Freelance Full-Stack Developer</h1>
        <Hero />
        <Stats />
        <Marquee />
        <Services />
        <Work />
        <Process />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
