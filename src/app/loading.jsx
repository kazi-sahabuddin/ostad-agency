const Loading = () => {
  return (
    <div className="bg-white z-50 h-screen w-full">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <span className="relative flex h-10 w-10 items-center justify-center">
          <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative h-10 w-10 rounded-full bg-da-green"></span>
        </span>
      </div>
    </div>
  );
};

export default Loading;
