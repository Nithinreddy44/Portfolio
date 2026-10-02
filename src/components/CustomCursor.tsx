import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device has touch primary
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest('a, button, input, textarea, [role="button"], .interactive-element');
      setIsHovered(!!interactive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Smooth lerp for outer ring
  useEffect(() => {
    if (isTouch) return;
    let animationFrameId: number;

    const follow = () => {
      setTrail(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.2,
        y: prev.y + (pos.y - prev.y) * 0.2
      }));
      animationFrameId = requestAnimationFrame(follow);
    };

    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [pos, isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-transform duration-100 ease-out ${
          isHovered
            ? 'w-10 h-10 -ml-5 -mt-5 bg-brand-400/15 border border-brand-400/50 backdrop-blur-[1px] scale-125'
            : 'w-7 h-7 -ml-3.5 -mt-3.5 border border-slate-400/30 dark:border-brand-400/30'
        }`}
        style={{
          transform: `translate3d(${trail.x}px, ${trail.y}px, 0)`,
        }}
      />
      {/* Inner Dot */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-all duration-75 ${
          isHovered
            ? 'w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-brand-400 shadow-glow-cyan'
            : 'w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-brand-400 dark:bg-brand-300'
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      />
    </>
  );
};
