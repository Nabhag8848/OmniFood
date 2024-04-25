import "./App.css";
import FeaturedSection from "./component/FeaturedSection";
import FeatureStep from "./pages/FeatureStep";
import HeroSection from "./pages/HeroSection";
import Meals from "./pages/Meals";
import Navigation from "./pages/Navigation";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import Cta from "./pages/Cta";
import Footer from "./pages/Footer";

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
        <Cta />
      </main>
      <Footer />
    </>
  );
}

export default App;
