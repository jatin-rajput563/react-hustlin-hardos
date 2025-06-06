import "./App.css";
import BreakingNews from "./components/BreakingNews";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NavSlider from "./components/NavSlider";

function App() {
  return (
    <>
      <NavSlider />
      <Header />
      <Hero />
      <BreakingNews />
    </>
  );
}

export default App;
