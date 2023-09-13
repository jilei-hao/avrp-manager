import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const gatewayURL = process.env.NEXT_PUBLIC_GATEWAY_URL;

  console.log("[AuthProvider] gatewayURL: ", gatewayURL);

  const login = (userData) => {
    // Implement your login logic here and set the user state
    setUser(userData);
  };

  const logout = () => {
    // Implement your logout logic here and clear the user state
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
