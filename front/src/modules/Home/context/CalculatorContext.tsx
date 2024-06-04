import React, { createContext, useState, ReactNode } from 'react';

interface Wall {
  height: number;
  width: number;
  doorsQuantity: number;
  windowsQuantity: number;
}

interface WallContextType {
  walls: Wall[];
  setWall: (index: number, wall: Wall) => void;
}

const defaultWalls = [
  { height: 0, width: 0, doorsQuantity: 0, windowsQuantity: 0 },
  { height: 0, width: 0, doorsQuantity: 0, windowsQuantity: 0 },
  { height: 0, width: 0, doorsQuantity: 0, windowsQuantity: 0 },
  { height: 0, width: 0, doorsQuantity: 0, windowsQuantity: 0 },
];

export const WallContext = createContext<WallContextType>({
  walls: defaultWalls,
  setWall: () => {},
});

export const WallProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [walls, setWalls] = useState<Wall[]>(defaultWalls);

  const setWall = (index: number, wall: Wall) => {
    const newWalls = [...walls];
    newWalls[index] = wall;
    setWalls(newWalls);
  };

  return (
    <WallContext.Provider value={{ walls, setWall }}>
      { children }
    </WallContext.Provider>
  );
};
