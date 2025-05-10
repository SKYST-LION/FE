import { useEffect } from "react";

const MapBox = () => {
  useEffect(() => {
    if (document.querySelector('script[src*="kakao.com"]')) {
      console.log("⚠️ Kakao Maps SDK already loaded.");
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=49077fac0d3c65f2ca54477167616583&autoload=false";
    script.async = true;

    script.onload = () => {
      console.log("✅ Kakao Maps SDK 로드 완료");
      if (!window.kakao || !window.kakao.maps) {
        console.error("❌ window.kakao.maps 가 없습니다.");
        return;
      }

      window.kakao.maps.load(() => {
        const container = document.getElementById("map");

        navigator.geolocation.getCurrentPosition(
          (position) => {
            const {latitude, longitude} = position.coords;
            const options = {
              center: new window.kakao.maps.LatLng(latitude, longitude),
              level: 3,
            };
            new window.kakao.maps.Map(container, options);
          },
          (error) => {
            console.warn("위치가져오기 실패 그냥 서울시청으로 할게", error);

            const options = {
              center: new window.kakao.maps.LatLng(37.5665, 126.978),
              level: 3,
            };
            new window.kakao.maps.Map(container, options);
    
            console.log("성공");

          }
        )

        

        
        
      });
    };

    script.onerror = () => {
      console.error("❌ Kakao script 로드 실패 으악");
    };

    document.head.appendChild(script);
  }, []);

  return (
    <div className="w-full max-w-[390px] bg-white rounded-xl shadow-md p-4 flex flex-col gap-4 mx-auto">
      {/* 상단 텍스트 + 버튼 */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-5 w-auto" />
          <h2 className="text-base font-bold">내 주변 버스킹 찾기</h2>
        </div>
        <button className="border border-[#6B3E00] text-[#6B3E00] text-xs px-3 py-1 rounded-full">
          조건 검색
        </button>
      </div>

      {/* 지도 */}
      <div className="w-full h-[300px] rounded-lg overflow-hidden">
        <div id="map" className="w-full h-full"></div>
      </div>
    </div>
  );
};

export default MapBox;
