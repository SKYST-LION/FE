import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

const SkeletonCard = () => (
  <div className="min-w-[280px] bg-gray-200 animate-pulse rounded-lg overflow-hidden">
    <div className="h-40 bg-gray-300"></div>
    <div className="p-4 space-y-2">
      <div className="h-4 w-1/2 bg-gray-400 rounded"></div>
      <div className="h-4 w-1/3 bg-gray-400 rounded"></div>
      <div className="h-3 w-1/4 bg-gray-300 rounded"></div>
    </div>
  </div>
);

const ScrollCarousel = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPerformances = async () => {
      try {
        const res = await axiosInstance.get("/api/performance/top-liked/");
        setCards(res.data);
      } catch (error) {
        console.error("공연 데이터 로드 실패:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPerformances();
  }, []);

  return (
    <div className="overflow-x-auto w-full">
      <div className="flex gap-4 px-4">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
          : cards.map((card, index) => (
              <div
                key={index}
                onClick={() => navigate(`/detail/${card.id}`)}
                className="min-w-[280px] bg-white shadow-sm rounded-lg overflow-hidden cursor-pointer"
              >
                <div className="px-4 pt-4 bg-[#3160D8] rounded-t-lg">
                  <p className="text-[24px] text-white font-semibold">
                    {card.location}
                  </p>
                  <p className="text-[16px] text-white font-medium">
                    {card.artist}
                  </p>
                  <p className="text-[12px] text-gray-400">
                    {card.date.slice(0, 10)}
                  </p>
                </div>
                <div className="px-4 pt-4 pb-4 bg-[#3160D8]">
                  <img
                    src={card.cover_image}
                    alt={card.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ScrollCarousel;
