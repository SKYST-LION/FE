import ScrollCarousel from "../components/ScrollCarousel";
import MapBox from "../components/Mapbox";

const Home = () => {
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      

      {/* 메인 콘텐츠 */}
      <main className="w-full max-w-4xl mx-auto px-4 py-6 flex flex-col gap-10">
        {/* 섹션 제목 */}
        <h2 className="text-[32px] font-bold pt-4 -mt-8">최신 버스킹</h2>

        {/* 구분선 */}
        <hr className="border-t-2 border-gray-200 my-0" />

        {/* 콘텐츠 */}
        <ScrollCarousel/>
        <MapBox />
      </main>
      

      
    </div>
  );
};

export default Home;