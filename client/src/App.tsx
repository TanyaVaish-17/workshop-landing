import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WorkshopDetails from "./components/WorkshopDetails";
import LearningOutcomes from "./components/LearningOutcomes";
import FAQSection from "./components/FAQSection";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0D0A1F] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WorkshopDetails />
      <LearningOutcomes />
      <FAQSection />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;