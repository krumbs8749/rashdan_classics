'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for a number plate
interface Plate {
  plateNumber: string;
  price: string;
  type: string;
}

// Define the context state types
interface AppContextType {
  drawerOpen: boolean;
  toggleDrawer: (open: boolean) => void;
  plates: Plate[];
}

// Create the Context with default values
const AppContext = createContext<AppContextType>({
  drawerOpen: false,
  toggleDrawer: () => {},
  plates: [],
});

// Custom hook to use the AppContext
export const useAppContext = () => useContext(AppContext);

// Provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  // Mocked number plates data
  const [plates] = useState<Plate[]>([
    { plateNumber: 'KF 20', price: 'RM 40,000', type: 'Golden Number' },
    { plateNumber: 'KF 21', price: 'RM 42,000', type: 'VIP Number' },
    { plateNumber: 'KF 22', price: 'RM 45,000', type: 'Golden Number' },
    { plateNumber: 'KF 20', price: 'RM 40,000', type: 'Golden Number' },
    { plateNumber: 'KF 21', price: 'RM 42,000', type: 'VIP Number' },
    { plateNumber: 'KF 22', price: 'RM 45,000', type: 'Golden Number' },
    { plateNumber: 'KF 20', price: 'RM 40,000', type: 'Golden Number' },
    { plateNumber: 'KF 21', price: 'RM 42,000', type: 'VIP Number' },
    { plateNumber: 'KF 22', price: 'RM 45,000', type: 'Golden Number' },
    { plateNumber: 'KF 20', price: 'RM 40,000', type: 'Golden Number' },
    { plateNumber: 'KF 21', price: 'RM 42,000', type: 'VIP Number' },
    { plateNumber: 'KF 22', price: 'RM 45,000', type: 'Golden Number' },
    { plateNumber: 'KF 20', price: 'RM 40,000', type: 'Golden Number' },
    { plateNumber: 'KF 21', price: 'RM 42,000', type: 'VIP Number' },
    { plateNumber: 'KF 22', price: 'RM 45,000', type: 'Golden Number' },
    { plateNumber: 'KF 20', price: 'RM 40,000', type: 'Golden Number' },
    { plateNumber: 'KF 21', price: 'RM 42,000', type: 'VIP Number' },
    { plateNumber: 'KF 22', price: 'RM 45,000', type: 'Golden Number' },
    { plateNumber: 'KF 20', price: 'RM 40,000', type: 'Golden Number' },
    { plateNumber: 'KF 21', price: 'RM 42,000', type: 'VIP Number' },
    { plateNumber: 'KF 22', price: 'RM 45,000', type: 'Golden Number' },
    { plateNumber: 'KF 20', price: 'RM 40,000', type: 'Golden Number' },
    { plateNumber: 'KF 21', price: 'RM 42,000', type: 'VIP Number' },
    { plateNumber: 'KF 22', price: 'RM 45,000', type: 'Golden Number' },
    { plateNumber: 'KF 20', price: 'RM 40,000', type: 'Golden Number' },
    { plateNumber: 'KF 21', price: 'RM 42,000', type: 'VIP Number' },
    { plateNumber: 'KF 22', price: 'RM 45,000', type: 'Golden Number' },
    // Add more number plates as needed
  ]);

  return (
    <AppContext.Provider value={{ drawerOpen, toggleDrawer, plates }}>
      {children}
    </AppContext.Provider>
  );
};
