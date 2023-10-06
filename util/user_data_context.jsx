import React, { createContext, useContext, useState } from 'react';
import { useAuth } from './auth_context';

const UserDataContext = createContext();

export function UserDataProvider({ children }) {
  const gatewayURL = process.env.NEXT_PUBLIC_GATEWAY_URL;
  console.log("[UserDataProvider] gatewayURL: ", gatewayURL);

  const { user } = useAuth();
  console.log("[UserDataProvider] active user: ", user);

  const [selectedStudy, setSelectedStudy] = useState(null); // selected study id
  const [config, setConfig] = useState(null); // selected configuration
  const [caseStudies, setCaseStudies] = useState(null);

  // function for submitting config form
  const submitConfig = (e) => {
    console.log('[UserDataProvider::submitConfig]');
  }

  // function for creating a new case
  const createCase = () => {
    console.log('[UserDataProvider::createCase]');
  };

  const createStudy = () => {
    console.log('[UserDataProvider]::createStudy');
  };

  return (
    <UserDataContext.Provider 
      value={{ caseStudies, selectedStudy, setSelectedStudy,
        createCase, createStudy, config, submitConfig
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  return useContext(UserDataContext);
};
