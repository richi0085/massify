import HeroSection from "@/components/HeroSection";
import ProblemSolution from "@/components/ProblemSolution";
import AppsShowcase from "@/components/AppsShowcase";
import PricingCalculator from "@/components/PricingCalculator";
import IntegrationsSection from "@/components/IntegrationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSolution />
      <AppsShowcase />
      <PricingCalculator />
      <IntegrationsSection />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
};

export default Index;
