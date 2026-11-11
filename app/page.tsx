import Navbar from '@/app/components/Navbar';
import HeroSection from '@/app/components/HeroSection';
import ArchiveSection from '@/app/components/ArchiveSection';
import HistoryTimeline from '@/app/components/HistoryTimeline';
import HeritageSection from '@/app/components/HeritageSection';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <div className="site-shell flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <main id="main" className="flex-1">
        <HistoryTimeline />
        <ArchiveSection />
        <HeritageSection />
      </main>
      <Footer />
    </div>
  );
}
