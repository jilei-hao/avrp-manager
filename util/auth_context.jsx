import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const gatewayURL = process.env.NEXT_PUBLIC_GATEWAY_URL;

  console.log("[AuthProvider] gatewayURL: ", gatewayURL);

  // attempt login, set user and return a meesage
  const login = async (userData) => {
    try {
      const response = await fetch(`${gatewayURL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      // parsing the response data
      response.json().then((data) => {
        const ok = response.status == 200;
        if (ok) {
          setUser({
            email: userData.email,
            token: data.userId,
          })
        } else
          setUser(null);
      })
    } catch (error) {
      setUser(null);
      console.error(`Error connecting to the server: ${error}`);
    }
  };

  const logout = () => {
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
