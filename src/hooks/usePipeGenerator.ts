import { useEffect, useRef } from "react";
import type { GameConstants, Pipe } from "../types";

export const usePipeGenerator = (
  gameStarted: boolean,
  gameOver: boolean,
  constants: GameConstants,
  setPipes: React.Dispatch<React.SetStateAction<Pipe[]>>
) => {
  const pipeTimer = useRef<number>(undefined);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    pipeTimer.current = window.setInterval(() => {
      const gapY = Math.random() * (constants.GAME_HEIGHT - constants.PIPE_GAP - 100) + 50;
      setPipes(prevPipes => [...prevPipes, { x: constants.GAME_WIDTH, gapY, scored: false }]);
    }, constants.PIPE_INTERVAL);

    return () => {
      if (pipeTimer.current) clearInterval(pipeTimer.current);
    };
  }, [gameStarted, gameOver]);
};
