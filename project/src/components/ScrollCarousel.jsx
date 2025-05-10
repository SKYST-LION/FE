const ScrollCarousel = () => {
    const cards = [
      {
        location: "홍대입구",
        title: "RUN",
        artist: "방탄소년단",
        image: "/runner.jpg",
      },
      {
        location: "강남역",
        title: "Butter",
        artist: "BTS",
        image: "/runner.jpg",
      },
      {
        location: "신촌",
        title: "Dynamite",
        artist: "BTS",
        image: "/runner.jpg",
      },
    ];
  
    return (
      <div className="overflow-x-auto w-full">
        <div className="flex gap-4 px-4 -mt-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-[280px] bg-white shadow-sm rounded-lg overflow-hidden"
            >
              <div className="px-4 pt-4">
                <p className="text-[18px] font-semibold">{card.location}</p>
                <p className="text-[16px] font-medium">{card.title}</p>
                <p className="text-[16px] text-gray-400">{card.artist}</p>
              </div>
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto px-4 pt-4 pb-4"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ScrollCarousel;