import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Services from "@/components/Services";
import Sectors from "@/components/Sectors";
import Process from "@/components/Process";
import Quality from "@/components/Quality";
import Structure from "@/components/Structure";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Sectors />
        <Process />
        <Quality />
        <Structure />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
