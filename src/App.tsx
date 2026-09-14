import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologiesSection from "./components/TechnologiesSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TechnologiesSection />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2000} theme="light" />
    </div>
  );
}
