import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Mission from '@/components/Mission';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Mission />
      <Services />
      <About />
      <Reviews />
      <CallToAction />
      <Footer />
    </main>
  );
} 