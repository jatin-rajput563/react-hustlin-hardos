import "./App.css";
import BreakingNews from "./components/BreakingNews";
import Faq from "./components/Faq";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LatestTweets from "./components/LatestTweets";
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
      <LatestTweets />
      <Minting />
      <Roadmap />
      <Team />
      <Faq />
    </>
  );
}

export default App;
