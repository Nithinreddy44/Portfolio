import React, { createContext, useContext, useEffect, useState } from 'react';
import { playSound } from '../utils/audio';

interface SoundContextType {
  isMuted: boolean;
  toggleSound: () => void;
  triggerSound: (type: 'click' | 'tab' | 'terminal' | 'success' | 'hover' | 'modal') => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    return localStorage.getItem('portfolio-sound-muted') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-sound-muted', String(isMuted));
  }, [isMuted]);

  const toggleSound = () => {
    setIsMuted(prev => {
      const next = !prev;
      if (!next) {
        // play confirmation sound
        setTimeout(() => playSound('success'), 50);
      }
      return next;
    });
  };

  const triggerSound = (type: 'click' | 'tab' | 'terminal' | 'success' | 'hover' | 'modal') => {
    if (!isMuted) {
      playSound(type);
    }
  };

  return (
    <SoundContext.Provider value={{ isMuted, toggleSound, triggerSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};
