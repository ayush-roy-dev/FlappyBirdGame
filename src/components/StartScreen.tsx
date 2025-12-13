export const StartScreen: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-linear-to-b from-black/60 to-black/40 backdrop-blur-sm z-30 animate-pulse">
      <div className="text-center text-white bg-linear-to-br from-blue-600 to-blue-700 p-10 rounded-3xl shadow-2xl border-4 border-blue-400 transform hover:scale-105 transition-transform">
        <div className="text-6xl mb-4 animate-bounce">🐦</div>
        <p className="text-3xl font-black mb-6 text-yellow-300" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}>
          READY TO FLY?
        </p>
        <div className="space-y-3 text-lg">
          <p className="bg-white/20 px-6 py-2 rounded-full backdrop-blur">
            <span className="font-bold text-yellow-300">SPACE</span> or <span className="font-bold text-yellow-300">CLICK</span> to Start
          </p>
          <p className="text-blue-200 text-sm">
            Tap to flap and avoid the pipes!
          </p>
        </div>
      </div>
    </div>
  );
};
