import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const gatewayURL = process.env.NEXT_PUBLIC_GATEWAY_URL;

  console.log("[AuthProvider] gatewayURL: ", gatewayURL);

  const login = async (userData) => {

    try {
      const response = await fetch(`${gatewayURL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      console.log("response: ", response);

      if (response.status === 200) {
        console.log('Logged in successfully');
      } else {
        console.error('Error logging in');
      }
    } catch (error) {
      console.error('Error logging in', error);
    }
    
    // Implement your login logic here and set the user state
    setUser({
      email: userData.email,
      token: response.token
    });
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
