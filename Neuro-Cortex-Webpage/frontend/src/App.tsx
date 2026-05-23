import { Architecture } from "./components/Architecture";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { PentestLab } from "./components/PentestLab";
import { RiskSeverity } from "./components/RiskCard";
import { StatsBar } from "./components/StatsBar";
import { ThreatEngine } from "./components/ThreatEngine";
import { ThreatIntel } from "./components/ThreatIntel";
import "./styles/globals.css";

export const App: React.FC = () => {
  return (
    <div className="bg-nc-base text-nc-text-primary overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <ThreatEngine />
        <PentestLab />
        <ThreatIntel />
        <Architecture />
        <RiskSeverity />
        <StatsBar />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};
