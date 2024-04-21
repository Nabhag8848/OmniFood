import "./App.css";
import FeatureStep from "./pages/FeatureStep";
import HeroSection from "./pages/HeroSection";
import Navigation from "./pages/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <FeatureStep />
      </main>
    </>
  );
}

export default App;
