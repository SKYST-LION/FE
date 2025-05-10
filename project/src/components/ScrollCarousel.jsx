    const ScrollCarousel = () => {
        const cards = [
        {
            location: "홍대입구",
            artist: "방탄소년단",
            date: "2025-05-14",
            image: "/bts.jpg",
        },
        {
            location: "강남역",
    
            artist: "로제",
            date: "2025-05-14",
            image: "/Rose.jpg",
        },
        {
            location: "신촌",
            artist: "제니",
            date: "2025-05-14",
            image: "/jennie.jpg",
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
                    <p className="text-[16px] font-medium">{card.artist}</p>
                    <p className="text-[16px] text-gray-400">{card.date}</p>
                </div>
                <div className="px-4 pt-4 pb-4">
                    <img
                        src={card.image}
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