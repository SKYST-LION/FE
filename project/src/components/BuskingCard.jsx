const BuskingCard = () => {
    return (
      <div className="w-full bg-white shadow-sm rounded overflow-hidden">
        
        <div className="px-4 pt-4 -mt-5">
          <p className="text-[18px] font-semibold text-[#3160D8]">홍대입구</p>
          <p className="text-[16px] font-medium">RUN</p>
          <p className="text-[16px] text-gray-400">방탄소년단</p>
        </div>
        <img
          src="/runner.jpg"
          alt="달리는 사람"
          className="w-full h-auto px-4 pt-4"
        />
      </div>
    );
  };
  
export default BuskingCard;