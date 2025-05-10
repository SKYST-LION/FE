import BuskingCard from "../components/BuskingCard";

const Home = () => {
  const performances = [
    { id: 1, name: "@@@", desc: "aaa", img: "/img1.jpg" },
    { id: 2, name: "@@@", desc: "aaa", img: "/img2.jpg" },
    { id: 3, name: "@@@", desc: "aaa", img: "/img3.jpg" },
    { id: 4, name: "@@@", desc: "aaa", img: "/img4.jpg" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 flex flex-col gap-10">
      {/* 최신 버스킹 카드 */}
      <BuskingCard />

      {/* 공연 리스트 */}
      <div>
        <h3 className="text-[20px] font-semibold mb-4">공연</h3>
        <div className="space-y-4">
          {performances.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-[60px] h-[60px] rounded object-cover"
              />
              <div>
                <p className="text-[16px] font-semibold">{item.name}</p>
                <p className="text-[14px] text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;