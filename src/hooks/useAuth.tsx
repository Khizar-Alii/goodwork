import { useState, useContext, createContext, ReactNode } from 'react';

// Define the shape of a User object
interface User {
  id: string;
  name: string;
  email: string;
}

// Define the context type for authentication
interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

// Create the AuthContext with an initial undefined value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider wraps your app and provides authentication state
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null); // Store the logged-in user

  // Log the user in by setting their data
  const login = (userData: User) => {
    setUser(userData);
  };

  // Log the user out by clearing the user state
  const logout = () => {
    setUser(null);
  };

  // Boolean to check if user is authenticated
  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth hook provides access to auth state from anywhere
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  // If used outside the provider, throw an error
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
