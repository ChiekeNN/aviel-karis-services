import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Quality from "@/components/Quality";
import Structure from "@/components/Structure";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Quality />
        <Structure />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
