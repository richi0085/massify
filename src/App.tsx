

import ConsequenceSection from "./components/ConsequenceSection";
import CredibilitySection from "./components/CredibilitySection";
import DataDrivenSection from "./components/DataDrivenSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import IntegrationSection from "./components/IntegrationSection";
import Navbar from "./components/NavBar";
import PainSection from "./components/PainSection";
import SolutionSection from "./components/SolutionSection";
import StructuralWeaknessSection from "./components/StructuralWeaknessSection";
import UpsideSection from "./components/UpsideSection";
import { LanguageProvider } from "./contexts/LanguageContext";


const App = () => (
  <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <PainSection />
        <ConsequenceSection />
        <StructuralWeaknessSection />
        <SolutionSection />
        <UpsideSection />
        <DataDrivenSection />
        <IntegrationSection />
        <CredibilitySection />
        <FinalCTA />
        <Footer />
      </div>
    </LanguageProvider>
);

export default App;
