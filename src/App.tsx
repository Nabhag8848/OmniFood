import "./App.css";
import FeaturedSection from "./component/FeaturedSection";
import FeatureStep from "./pages/FeatureStep";
import HeroSection from "./pages/HeroSection";
import Meals from "./pages/Meals";
import Navigation from "./pages/Navigation";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedSection />
        <FeatureStep />
        <Meals />
        <Testimonials />
        <Pricing />
      </main>
    </>
  );
}

export default App;
