import { useEffect, useState } from "react";
import GameCanvas from "./components/GameCanvas";
import { ScoreBoard } from "./components/ScoreBoard";
import { CONSTANTS } from "./constants";
import { useGameLoop } from "./hooks/useGameLoop";
import { usePipeGenerator } from "./hooks/usePipeGenerator";
import type { Pipe } from "./types";

const App: React.FC = () => {
  const [birdY, setBirdY] = useState(250);
  const [birdVelocity, setBirdVelocity] = useState(0);
  const [pipes, setPipes] = useState<Pipe[]>([]);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [highScore, setHighScore] = useState(0);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setBirdY(250);
    setBirdVelocity(0);
    setPipes([]);
    setScore(0);
  };

  const jump = () => {
    setBirdVelocity(CONSTANTS.JUMP_STRENGTH);
  };

  const endGame = () => {
    setGameOver(true);
    if (score > highScore) {
      setHighScore(score);
    }
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setBirdY(250);
    setBirdVelocity(0);
    setPipes([]);
    setScore(0);
  };

  const handleInteract = () => {
    if (!gameStarted && !gameOver) {
      startGame();
    } else if (gameOver) {
      resetGame();
    } else {
      jump();
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        handleInteract();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted, gameOver]);

  useGameLoop({
    gameStarted,
    gameOver,
    birdY,
    birdVelocity,
    pipes,
    constants: CONSTANTS,
    setBirdY,
    setBirdVelocity,
    setPipes,
    setScore,
    endGame
  });

  usePipeGenerator(gameStarted, gameOver, CONSTANTS, setPipes);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-blue-400 via-sky-400 to-cyan-300 p-8">
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce">☁️</div>
      <div className="absolute top-20 right-20 text-6xl opacity-20 animate-bounce" style={{ animationDelay: '1s' }}>☁️</div>
      <div className="absolute bottom-20 left-20 text-6xl opacity-20 animate-bounce" style={{ animationDelay: '2s' }}>☁️</div>
      
      <ScoreBoard score={score} highScore={highScore} />
      
      <GameCanvas
        birdY={birdY}
        birdVelocity={birdVelocity}
        pipes={pipes}
        gameStarted={gameStarted}
        gameOver={gameOver}
        score={score}
        highScore={highScore}
        constants={CONSTANTS}
        onInteract={handleInteract}
      />

      <div className="mt-6 text-center">
        <div className="bg-white/30 backdrop-blur-md text-slate-800 px-6 py-3 rounded-2xl shadow-lg border-2 border-white/50">
           <p className="text-sm font-bold flex items-center gap-2 justify-center">
            <span className="text-2xl">⌨️</span>
            Press <kbd className="px-2 py-1 bg-white rounded shadow-md font-mono text-xs">SPACE</kbd> or 
            <span className="text-2xl">👆</span> Click to flap!
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;