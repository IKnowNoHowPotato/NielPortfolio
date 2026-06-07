import { motion } from 'motion/react';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface MobileControlsProps {
  onDPadPress: (direction: 'up' | 'down' | 'left' | 'right') => void;
  onActionPress: (button: 'triangle' | 'circle' | 'x' | 'square') => void;
}

export function MobileControls({ onDPadPress, onActionPress }: MobileControlsProps) {
  const handlePress = (callback: () => void) => (e: React.TouchEvent | React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    callback();
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] flex items-end justify-between p-4 pb-8 lg:hidden">
      {/* D-Pad on the left */}
      <div className="pointer-events-auto relative w-32 h-32">
        {/* Up */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onTouchStart={handlePress(() => onDPadPress('up'))}
          onClick={handlePress(() => onDPadPress('up'))}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded flex items-center justify-center active:bg-white/20"
        >
          <ChevronUp className="text-white" size={24} strokeWidth={2.5} />
        </motion.button>

        {/* Down */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onTouchStart={handlePress(() => onDPadPress('down'))}
          onClick={handlePress(() => onDPadPress('down'))}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded flex items-center justify-center active:bg-white/20"
        >
          <ChevronDown className="text-white" size={24} strokeWidth={2.5} />
        </motion.button>

        {/* Left */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onTouchStart={handlePress(() => onDPadPress('left'))}
          onClick={handlePress(() => onDPadPress('left'))}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded flex items-center justify-center active:bg-white/20"
        >
          <ChevronLeft className="text-white" size={24} strokeWidth={2.5} />
        </motion.button>

        {/* Right */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onTouchStart={handlePress(() => onDPadPress('right'))}
          onClick={handlePress(() => onDPadPress('right'))}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded flex items-center justify-center active:bg-white/20"
        >
          <ChevronRight className="text-white" size={24} strokeWidth={2.5} />
        </motion.button>
      </div>

      {/* PSP Action Buttons on the right */}
      <div className="pointer-events-auto relative w-32 h-32">
        {/* Triangle (Top) */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onTouchStart={handlePress(() => onActionPress('triangle'))}
          onClick={handlePress(() => onActionPress('triangle'))}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full flex items-center justify-center active:bg-white/20"
        >
          <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-white" />
        </motion.button>

        {/* Square (Left) */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onTouchStart={handlePress(() => onActionPress('square'))}
          onClick={handlePress(() => onActionPress('square'))}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full flex items-center justify-center active:bg-white/20"
        >
          <div className="w-5 h-5 border-2 border-white" />
        </motion.button>

        {/* Circle (Right) */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onTouchStart={handlePress(() => onActionPress('circle'))}
          onClick={handlePress(() => onActionPress('circle'))}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full flex items-center justify-center active:bg-white/20"
        >
          <div className="w-5 h-5 rounded-full border-2 border-white" />
        </motion.button>

        {/* X (Bottom) */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onTouchStart={handlePress(() => onActionPress('x'))}
          onClick={handlePress(() => onActionPress('x'))}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full flex items-center justify-center active:bg-white/20"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" className="text-white">
            <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
