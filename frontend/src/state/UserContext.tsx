import React, { createContext, useState, useContext, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface UserContextType {
  user: User | null;
  loginUser: (userData: User) => void;
  logoutUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a custom hook to access the user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// Create a provider component to wrap your application
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Initialize state to store user information
  const [user, setUser] = useState<User | null>(null);

  // Function to set user information
  const loginUser = (userData: User) => {
    setUser(userData);
  };

  // Function to log out the user
  const logoutUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
