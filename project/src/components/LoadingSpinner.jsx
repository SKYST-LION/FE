const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3160D8]"></div>
    </div>
  );
};

export default LoadingSpinner;