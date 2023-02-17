import About from '@/components/Home/About';
import Contact from '@/components/Home/Contact';
import Hero from '@/components/Home/Hero';
import Partners from '@/components/Home/Partners';
import Tiers from '@/components/Home/Tiers';
import RoundCard from '@/components/RoundCard';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Launchpad</title>
        <meta name="description" content="Launchpad " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pp-homepage">
        <Hero />
        <About />
        <Tiers />
        <Partners />
        <Contact />
      </div>
    </div>
  );
}
