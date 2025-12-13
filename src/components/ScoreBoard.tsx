interface ScoreBoardProps {
  score: number;
  highScore: number;
}


export const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, highScore }) => {
  return (
    <div className="mb-6 text-center">
      <h1 className="text-5xl font-black text-white mb-4 drop-shadow-2xl tracking-tight" 
          style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.3), 2px 2px 0px rgba(251,191,36,0.5)' }}>
        🐦 FLAPPY BIRD
      </h1>
      <div className="flex gap-4 justify-center">
        <div className="bg-linear-to-br from-yellow-400 to-yellow-500 text-yellow-900 px-6 py-3 rounded-2xl shadow-xl border-4 border-yellow-600 font-bold text-xl min-w-35">
          <div className="text-xs uppercase tracking-wide opacity-80">Score</div>
          <div className="text-3xl font-black">{score}</div>
        </div>
        <div className="bg-linear-to-br from-purple-500 to-purple-600 text-white px-6 py-3 rounded-2xl shadow-xl border-4 border-purple-700 font-bold text-xl min-w-35">
          <div className="text-xs uppercase tracking-wide opacity-90">Best</div>
          <div className="text-3xl font-black">{highScore}</div>
        </div>
      </div>
    </div>
  );
};
