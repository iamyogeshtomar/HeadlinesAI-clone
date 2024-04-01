import { Navbar } from "@/components/Navbar";
import { Heading } from "@/components/Heading";
import { PreviewSection } from "@/components/PreviewSection";
import { StepsSection } from "@/components/StepsSection";
import { PricingSection } from "@/components/PricingSection";
import { QuestionSection } from "@/components/QuestionSection";
import { OfferSection } from "@/components/OfferSection";
import { Footer } from "@/components/Footer";

const App = () => {
  return (
    <>
      <div className="h-full">
        <Navbar />
        <main className="h-auto bg-gradient-to-b from-[#01011D] from-40% via-[#0b0b49] via-60% to-[#01011D] to-70%">
          <Heading />
          <section className="flex flex-col justify-center items-center">
            <PreviewSection />
            <StepsSection />
            <PricingSection />
            <QuestionSection />
            <OfferSection />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
