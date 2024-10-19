import Hero from "./components/Hero";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";
function App() {
  return (
    <div className="scroll-smooth font-Arima bg-mybg">
      <LandingPage />
      <Products />
      <Hero />
    </div>
  );
}

export default App;
