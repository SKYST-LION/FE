import { useEffect } from "react";

const MapBox = () => {
  const performances = [
    { id: 1, name: "방탄소년단 버스킹", lat: 37.5665, lng: 126.9780 },
    { id: 2, name: "아이유 버스킹", lat: 37.5555, lng: 126.9707 },
    { id: 3, name: "이무진 버스킹", lat: 37.5581, lng: 126.9985 },
  ];

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

        const renderMap = (lat, lng) => {
          const options = {
            center: new window.kakao.maps.LatLng(lat, lng),
            level: 3,
          };
          const map = new window.kakao.maps.Map(container, options);

          // 마커 찍기
          performances.forEach((perf) => {
            const markerPosition = new window.kakao.maps.LatLng(perf.lat, perf.lng);
            new window.kakao.maps.Marker({
              map,
              position: markerPosition,
              title: perf.name,
            });
          });
        };

        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            renderMap(latitude, longitude);
          },
          (error) => {
            console.warn("위치가져오기 실패, 서울시청 중심으로 대체", error);
            renderMap(37.5665, 126.978);
          }
        );
      });
    };

    script.onerror = () => {
      console.error("❌ Kakao script 로드 실패");
    };

    document.head.appendChild(script);
  }, []);

  return (
    <div className="w-full max-w-[390px] bg-white rounded-xl shadow-md p-4 flex flex-col gap-4 mx-auto">
      {/* 상단 텍스트 + 버튼 */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-bold">내 주변 버스킹 찾기</h2>
        </div>
      </div>

      {/* 지도 */}
      <div className="w-full h-[250px] rounded-lg overflow-hidden">
        <div id="map" className="w-full h-full"></div>
      </div>
    </div>
  );
};

export default MapBox;
