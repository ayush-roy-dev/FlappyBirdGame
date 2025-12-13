interface PipeProps {
  x: number;
  gapY: number;
  width: number;
  gap: number;
  gameHeight: number;
}

export const PipeComponent: React.FC<PipeProps> = ({ x, gapY, width, gap, gameHeight }) => {
  return (
    <>
      <div
        className="absolute bg-linear-to-r from-green-600 via-green-500 to-green-600 border-4 border-green-800 shadow-xl z-10"
        style={{
          width: width,
          height: gapY,
          left: x,
          top: 0
        }}
      >
        <div className="absolute -bottom-2 -left-1 -right-1 h-10 bg-linear-to-b from-green-400 to-green-600 border-4 border-green-800 rounded-b-lg shadow-lg"></div>
        
        <div className="absolute top-4 left-2 w-1 h-16 bg-green-400 opacity-40 rounded"></div>
        <div className="absolute top-4 right-2 w-1 h-16 bg-green-700 opacity-40 rounded"></div>
      </div>
      <div
        className="absolute bg-linear-to-r from-green-600 via-green-500 to-green-600 border-4 border-green-800 shadow-xl z-10"
        style={{
          width: width,
          height: gameHeight - gapY - gap,
          left: x,
          top: gapY + gap
        }}
      >
        <div className="absolute -top-2 -left-1 -right-1 h-10 bg-linear-to-t from-green-400 to-green-600 border-4 border-green-800 rounded-t-lg shadow-lg"></div>
        
        <div className="absolute bottom-4 left-2 w-1 h-16 bg-green-400 opacity-40 rounded"></div>
        <div className="absolute bottom-4 right-2 w-1 h-16 bg-green-700 opacity-40 rounded"></div>
      </div>
    </>
  );
};