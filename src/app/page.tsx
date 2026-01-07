import { Header } from '@/components/client/landing/Header';
import { Hero } from '@/components/client/landing/Hero';
import { Achievements } from '@/components/client/landing/Achievements';
import { Courses } from '@/components/client/landing/Courses';
import { Footer } from '@/components/client/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <main>
        <Hero />
        <Achievements />
        <Courses />
      </main>
      <Footer />
    </div>
  );
}
