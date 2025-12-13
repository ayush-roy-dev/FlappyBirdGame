import { useEffect, useRef } from "react";
import type { GameConstants, Pipe } from "../types";

interface UseGameLoopProps {
  gameStarted: boolean;
  gameOver: boolean;
  birdY: number;
  birdVelocity: number;
  pipes: Pipe[];
  constants: GameConstants;
  setBirdY: React.Dispatch<React.SetStateAction<number>>;
  setBirdVelocity: React.Dispatch<React.SetStateAction<number>>;
  setPipes: React.Dispatch<React.SetStateAction<Pipe[]>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  endGame: () => void;
}

export const useGameLoop = ({
  gameStarted,
  gameOver,
  birdY,
  birdVelocity,
  pipes,
  constants,
  setBirdY,
  setBirdVelocity,
  setPipes,
  setScore,
  endGame
}: UseGameLoopProps) => {
  const gameLoop = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    gameLoop.current = window.setInterval(() => {
      let currentBirdY = birdY;
      let currentBirdVelocity = birdVelocity;
      
      setBirdVelocity(v => {
        currentBirdVelocity = v + constants.GRAVITY;
        return currentBirdVelocity;
      });
      
      setBirdY(y => {
        const newY = y + currentBirdVelocity;
        currentBirdY = newY;
        
        if (newY > constants.GAME_HEIGHT - constants.BIRD_SIZE || newY < 0) {
          endGame();
          return y;
        }
        
        return newY;
      });

      setPipes(prevPipes => {
        const newPipes = prevPipes
          .map(pipe => ({ ...pipe, x: pipe.x - constants.PIPE_SPEED }))
          .filter(pipe => pipe.x > -constants.PIPE_WIDTH);

        newPipes.forEach(pipe => {
          const birdLeft = 50;
          const birdRight = birdLeft + constants.BIRD_SIZE;
          const birdTop = currentBirdY;
          const birdBottom = currentBirdY + constants.BIRD_SIZE;

          const pipeLeft = pipe.x;
          const pipeRight = pipe.x + constants.PIPE_WIDTH;
          const topPipeBottom = pipe.gapY;
          const bottomPipeTop = pipe.gapY + constants.PIPE_GAP;

          if (birdRight > pipeLeft && birdLeft < pipeRight) {
            if (birdTop < topPipeBottom || birdBottom > bottomPipeTop) {
              endGame();
            }
          }

          if (pipe.x + constants.PIPE_WIDTH < birdLeft && !pipe.scored) {
            pipe.scored = true;
            setScore(s => s + 1);
          }
        });

        return newPipes;
      });
    }, 20);

    return () => {
      if (gameLoop.current) clearInterval(gameLoop.current);
    };
  }, [gameStarted, gameOver, birdY, birdVelocity, pipes]);
};