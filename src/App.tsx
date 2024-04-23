import "./App.css";
import FeaturedSection from "./component/FeaturedSection";
import FeatureStep from "./pages/FeatureStep";
import HeroSection from "./pages/HeroSection";
import Meals from "./pages/Meals";
import Navigation from "./pages/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedSection />
        <FeatureStep />
        <Meals />
      </main>
    </>
  );
}

export default App;
