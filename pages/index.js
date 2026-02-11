import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/landing/Hero';
import TrustBar from '../components/landing/TrustBar';
import TopicGrid from '../components/landing/TopicGrid';
import HowItWorks from '../components/landing/HowItWorks';
import ExampleQA from '../components/landing/ExampleQA';
import ResourcesSection from '../components/landing/ResourcesSection';
import FAQ from '../components/landing/FAQ';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>RightsAI — Know Your Rights. Instantly.</title>
      </Head>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <TopicGrid />
        <HowItWorks />
        <ExampleQA />
        <ResourcesSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}