import "./App.css";
import BreakingNews from "./components/BreakingNews";
import Faq from "./components/Faq";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LatestNews from "./components/LatestNews";
import Minting from "./components/Minting";
import NavSlider from "./components/NavSlider";
import Roadmap from "./components/RoadMap";
import Team from "./components/Team";

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
      <Team />
      <Faq />
    </>
  );
}

export default App;
