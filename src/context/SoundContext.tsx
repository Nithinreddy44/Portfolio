import React, { createContext, useContext } from 'react';

interface SoundContextType {
  isMuted: boolean;
  toggleSound: () => void;
  triggerSound: (type: 'click' | 'tab' | 'terminal' | 'success' | 'hover' | 'modal') => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const triggerSound = () => {};
  const toggleSound = () => {};

  return (
    <SoundContext.Provider value={{ isMuted: true, toggleSound, triggerSound }}>
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
