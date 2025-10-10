import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20"> {/* This padding pushes content below the fixed header */}
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
    </>
  );
}


