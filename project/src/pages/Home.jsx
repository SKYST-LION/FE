import BuskingCard from "../components/BuskingCard";
import MapBox from "../components/Mapbox";

const Home = () => {
  const TopBanner = () => (
    <div className="w-full h-[71px] bg-[#3160D8] flex-shrink-0" />
  );


  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 상단 파란 영역 */}
      <TopBanner />

      {/* 3) 메인 콘텐츠: 동일한 좌우 패딩(px-4) */}
      <main className="w-full max-w-4xl mx-auto px-4 py-6 flex flex-col gap-10"/>
        {/* “최신 버스킹” 헤더에도 px-4 가 적용된 상태 */}
        <h2 className="text-[32px] font-bold px-4 pt-4">최신 버스킹</h2>
        
      <BuskingCard/>
      <MapBox/>

      
        
        
      
    </div>
  );
};

export default Home;