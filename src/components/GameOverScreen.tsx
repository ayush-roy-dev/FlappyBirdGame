interface GameOverScreenProps {
  score: number;
  highScore: number;
}
export const GameOverScreen: React.FC<GameOverScreenProps> = ({ score, highScore }) => {
  const isNewHighScore = score === highScore && score > 0;
  
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-linear-to-b from-black/70 to-black/50 backdrop-blur-sm z-30">
      <div className="text-center text-white bg-linear-to-br from-red-600 to-red-700 p-10 rounded-3xl shadow-2xl border-4 border-red-400 transform animate-bounce">
        <div className="text-6xl mb-4">💀</div>
        <p className="text-4xl font-black mb-4 text-yellow-300" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}>
          GAME OVER!
        </p>
        
        <div className="bg-white/20 backdrop-blur rounded-2xl p-6 mb-6 space-y-2">
          <p className="text-sm uppercase tracking-wider opacity-80">Final Score</p>
          <p className="text-5xl font-black text-yellow-300">{score}</p>
          
          {isNewHighScore && (
            <div className="mt-4 animate-pulse">
              <p className="text-2xl font-bold text-yellow-300 mb-1">🎉 NEW RECORD! 🎉</p>
              <p className="text-sm text-yellow-200">You're amazing!</p>
            </div>
          )}
        </div>
        
        <p className="text-lg bg-white/20 px-6 py-3 rounded-full backdrop-blur">
          <span className="font-bold text-yellow-300">SPACE</span> or <span className="font-bold text-yellow-300">CLICK</span> to Restart
        </p>
      </div>
    </div>
  );
};

