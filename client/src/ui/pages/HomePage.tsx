import("../../App.css");
import Navigation from "../components/common/Navigation";
import SectionCard from "../components/common/SectionCard";

export default function HomePage() {
  return (
    <div className="App flex flex-row bg-primary-100 h-screen">
      <Navigation />
      <div className="home-screen-container flex flex-row w-full h-full flex-wrap overflow-y-scroll overflow-x-hidden p-10">
        <SectionCard title="test">
          <div>small text</div>
        </SectionCard>
      </div>
    </div>
  );
}
