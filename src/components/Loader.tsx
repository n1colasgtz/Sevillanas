import React, { useEffect, useState } from 'react';

interface LoaderProps {
  onLoadComplete?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 200);

    // Cleanup interval
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // When progress reaches 100%, start fade out animation
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
        if (onLoadComplete) {
          setTimeout(() => {
            onLoadComplete();
          }, 500); // Wait for fade out animation to complete
        }
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [progress, onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-gradient-to-br from-red-900 to-red-950 flex flex-col items-center justify-center transition-opacity duration-500 ${
        progress >= 100 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo and Animation Container */}
      <div className="relative mb-12">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full"></div>
        
        {/* Animated border */}
        <div className="relative w-32 h-32 rounded-full">
          <div className="absolute inset-0 border-4 border-yellow-400/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-yellow-400 rounded-full animate-spin"></div>
          
          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gradient-to-br from-red-600 to-red-700 p-4 rounded-full shadow-lg">
              <span className="text-4xl animate-[dance_3s_ease-in-out_infinite]">💃</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Text Content */}
      <div className="text-center mb-8">
        <div className="font-display text-4xl md:text-5xl text-white tracking-wide leading-none mb-2">
          SOMOS DISCRETOS
        </div>
        <div className="flex justify-center">
          <span className="text-sm md:text-base font-heading font-semibold tracking-widest uppercase text-yellow-400">
            SEVILLANAS
          </span>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="w-64 md:w-80">
        <div className="h-1 bg-red-800/50 rounded-full overflow-hidden mb-2">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center text-sm text-white/70">
          <span>{progress < 100 ? 'Cargando recursos...' : '¡Ole ole!'}</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-20 bg-pattern-flamenco opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-pattern-flamenco opacity-5"></div>
      </div>
    </div>
  );
};

export default Loader;