import React, { FC, createContext, useContext, useState } from 'react';

interface UserContextType {
  user: boolean;
  error: string;
  signInUser: () => Promise<void>;
  logoutUser: () => void;
}

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState(false);
  const [error, setError] = useState('');

  const signInUser = async () => {
    try {
      setUser(true);
      if (user === true) {
        console.log('You are logged in');
      }
    } catch (error) {
      setError('Error during sign in');
    }
  };

  const logoutUser = () => {
    setUser(false);
  };

  const contextValue: UserContextType = {
    user,
    error,
    signInUser,
    logoutUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
