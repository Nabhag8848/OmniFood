import "./App.css";
import FeaturedSection from "./component/FeaturedSection";
import FeatureStep from "./pages/FeatureStep";
import HeroSection from "./pages/HeroSection";
import Navigation from "./pages/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedSection />
        <FeatureStep />
      </main>
    </>
  );
}

export default App;
