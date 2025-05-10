const BuskingCard = () => {
    return (
      <div className="w-[402px]">
        <h2 className="text-[32px] font-bold">최신 버스킹</h2>
        <div className="mt-4">
          <p className="text-[18px] font-semibold">홍대입구</p>
          <p className="text-[16px] font-medium">RUN</p>
          <p className="text-[16px] text-gray-400">방탄소년단</p>
        </div>
        <img
          src="/runner.png"
          alt="달리는 사람"
          className="w-full h-auto mt-4 rounded"
        />
      </div>
    );
  };
  
  export default BuskingCard;