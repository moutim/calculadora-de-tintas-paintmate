import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface Wall {
  height: number;
  width: number;
  doorsQuantity: number;
  windowsQuantity: number;
}

interface WallContextType {
  walls: Wall[];
  setWall: (index: number, wall: Wall) => void;
  filledFields: boolean;
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
  filledFields: false
});

export const WallProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [walls, setWalls] = useState<Wall[]>(defaultWalls);
  const [filledFields, setFilledFieldsState] = useState(false);

  const setWall = (index: number, wall: Wall) => {
    const newWalls = [...walls];
    newWalls[index] = wall;
    setWalls(newWalls);
  };

  const setFilledFields = () => {
    const allFieldsFilled = walls.every(wall =>
      wall.height > 0 && wall.width > 0 && wall.doorsQuantity >= 0 && wall.windowsQuantity >= 0
    );
    setFilledFieldsState(allFieldsFilled);
  };

  useEffect(() => {
    setFilledFields();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walls]);

  return (
    <WallContext.Provider value={{ walls, setWall, filledFields }}>
      { children }
    </WallContext.Provider>
  );
};
