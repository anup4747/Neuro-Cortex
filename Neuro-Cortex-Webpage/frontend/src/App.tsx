import { useState } from "react";
import { Architecture } from "./components/Architecture";
import { AccessRequestModal } from "./components/AccessRequestModal";
import { CTASection } from "./components/CTASection";
import { DesktopAccessPage } from "./components/DesktopAccessPage";
import { FeedbackSection } from "./components/FeedbackSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { LoginPage } from "./components/LoginPage";
import { Navbar } from "./components/Navbar";
import { PentestLab } from "./components/PentestLab";
import { RiskSeverity } from "./components/RiskCard";
import { StatsBar } from "./components/StatsBar";
import { ThreatEngine } from "./components/ThreatEngine";
import { ThreatIntel } from "./components/ThreatIntel";
import "./styles/globals.css";

export const App: React.FC = () => {
  const [pageMode, setPageMode] = useState<"public" | "login" | "desktop">(
    "public",
  );
  const [showRequestAccessModal, setShowRequestAccessModal] = useState(false);

  const openRequestAccess = () => {
    setShowRequestAccessModal(true);
  };

  return (
    <div className="bg-nc-base text-nc-text-primary overflow-hidden min-h-screen">
      <Navbar
        onLogin={() => setPageMode("login")}
        onRequestAccess={openRequestAccess}
      />
      <AccessRequestModal
        open={showRequestAccessModal}
        onClose={() => setShowRequestAccessModal(false)}
      />

      {pageMode === "login" ? (
        <LoginPage
          onSuccess={() => setPageMode("desktop")}
          onCancel={() => setPageMode("public")}
        />
      ) : pageMode === "desktop" ? (
        <DesktopAccessPage onBack={() => setPageMode("public")} />
      ) : (
        <>
          <main>
            <Hero />
            <ThreatEngine />
            <PentestLab />
            <ThreatIntel />
            <Architecture />
            <RiskSeverity />
            <StatsBar />
            <CTASection onRequestAccess={openRequestAccess} />
            <FeedbackSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};
