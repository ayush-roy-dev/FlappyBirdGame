import type { GameConstants, Pipe } from "../types";
import { Bird } from "./Bird";
import { GameOverScreen } from "./GameOverScreen";
import { PipeComponent } from "./Pipe";
import { StartScreen } from "./StartScreen";

interface GameCanvasProps {
  birdY: number;
  birdVelocity: number;
  pipes: Pipe[];
  gameStarted: boolean;
  gameOver: boolean;
  score: number;
  highScore: number;
  constants: GameConstants;
  onInteract: () => void;
}

const GameCanvas: React.FC<GameCanvasProps> = ({
  birdY,
  birdVelocity,
  pipes,
  gameStarted,
  gameOver,
  score,
  highScore,
  constants,
  onInteract
}) => {
  return (
    <div 
      className="relative bg-linear-to-b from-sky-300 via-sky-200 to-sky-100 border-8 border-yellow-700 rounded-2xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-3xl transition-shadow"
      style={{ width: constants.GAME_WIDTH, height: constants.GAME_HEIGHT }}
      onClick={onInteract}
    >
      <div className="absolute top-20 left-10 w-20 h-10 bg-white rounded-full opacity-80 shadow-lg animate-pulse"></div>
      <div className="absolute top-20 left-16 w-16 h-8 bg-white rounded-full opacity-80 shadow-lg animate-pulse"></div>
      
      <div className="absolute top-60 right-8 w-24 h-12 bg-white rounded-full opacity-70 shadow-lg" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-60 right-14 w-20 h-10 bg-white rounded-full opacity-70 shadow-lg" style={{ animationDelay: '1s' }}></div>
      
      <div className="absolute top-120 left-32 w-28 h-14 bg-white rounded-full opacity-60 shadow-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-120 left-38 w-22 h-11 bg-white rounded-full opacity-60 shadow-lg animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-b from-green-600 to-green-800 border-t-4 border-yellow-600 z-10">
        <div className="absolute top-0 left-0 right-0 h-2 bg-yellow-500"></div>
        <div className="flex justify-around pt-2">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-4 h-8 bg-green-700 rounded-t-full"></div>
          ))}
        </div>
      </div>

      <Bird y={birdY} velocity={birdVelocity} size={constants.BIRD_SIZE} />

      {pipes.map((pipe, i) => (
        <PipeComponent
          key={i}
          x={pipe.x}
          gapY={pipe.gapY}
          width={constants.PIPE_WIDTH}
          gap={constants.PIPE_GAP}
          gameHeight={constants.GAME_HEIGHT}
        />
      ))}

      {!gameStarted && !gameOver && <StartScreen />}
      {gameOver && <GameOverScreen score={score} highScore={highScore} />}
    </div>
  );
};

export default GameCanvas;