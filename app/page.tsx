import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Categories from "@/components/Categories";
import WhatYouGet from "@/components/WhatYouGet";
import Bonuses from "@/components/Bonuses";
import Academy from "@/components/Academy";
import MemberArea from "@/components/MemberArea";
import Audience from "@/components/Audience";
import HowItWorks from "@/components/HowItWorks";
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
        <Problem />
        <Categories />
        <WhatYouGet />
        <Bonuses />
        <Academy />
        <MemberArea />
        <Audience />
        <HowItWorks />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}