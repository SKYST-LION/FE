import BuskingCard from "../components/BuskingCard";
import MapBox from "../components/Mapbox";

const Home = () => {
  

  return (
    <div className="max-w-4xl mx-auto p-8 flex flex-col gap-10">
      {/* 최신 버스킹 카드 */}
      <BuskingCard />

      <MapBox />
    </div>
  );
};

export default Home;