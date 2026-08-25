import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeBand from "@/components/MarqueeBand";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import WhatYouGet from "@/components/WhatYouGet";
import Demo from "@/components/Demo";
import MemberArea from "@/components/MemberArea";
import Offer from "@/components/Offer";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarqueeBand />
        <Problem />
        <Solution />
        <WhatYouGet />
        <Demo />
        <MemberArea />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}