interface BirdProps {
  y: number;
  velocity: number;
  size: number;
}

export const Bird: React.FC<BirdProps> = ({ y, velocity, size }) => {
  return (
    <div
      className="absolute transition-all duration-100 ease-linear z-20"
      style={{
        width: size,
        height: size,
        left: 50,
        top: y,
        transform: `rotate(${Math.min(Math.max(velocity * 3, -30), 90)}deg)`
      }}
    >
      <div className="relative w-full h-full bg-linear-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-full shadow-lg border-3 border-yellow-600">
        <div className="absolute top-1/2 left-1/4 w-5 h-3 bg-yellow-500 rounded-full transform -translate-y-1/2 shadow-sm"></div>
        
        <div className="absolute top-3 right-2 w-4 h-4 bg-white rounded-full shadow-inner">
          <div className="absolute top-1 right-0.5 w-2 h-2 bg-black rounded-full"></div>
        </div>
        
        <div className="absolute top-1/2 -right-2 w-4 h-3 bg-linear-to-r from-orange-400 to-orange-500 transform -translate-y-1/2 shadow-md" 
             style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
        
        <div className="absolute top-5 right-7 w-3 h-2 bg-red-300 rounded-full opacity-40"></div>
      </div>
    </div>
  );
};

