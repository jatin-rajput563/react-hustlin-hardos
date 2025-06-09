import "./App.css";
import BreakingNews from "./components/BreakingNews";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LatestNews from "./components/LatestNews";
import Minting from "./components/Minting";
import NavSlider from "./components/NavSlider";
import Roadmap from "./components/RoadMap";

function App() {
  return (
    <>
      <NavSlider />
      <Header />
      <Hero />
      <BreakingNews />
      <LatestNews />
      <Minting />
      <Roadmap />
    </>
  );
}

export default App;
