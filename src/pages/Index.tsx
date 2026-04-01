import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ExtraCurricularSection from "@/components/ExtraCurricularSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import BackToTop from "@/components/BackToTop";
import CustomCursor from "@/components/CustomCursor";

const Index = () => (
  <div className="min-h-screen bg-background">
    <CustomCursor />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <EducationSection />
    <ProjectsSection />
    <AchievementsSection />
    <CertificationsSection />
    <ExtraCurricularSection />
    <ContactSection />
    <FooterSection />
    <BackToTop />
  </div>
);

export default Index;
