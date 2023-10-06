import React, { createContext, useContext, useState, useEffect} from 'react';
import { useAuth } from './auth_context';
import { gw_CreateCase } from './gateway_helpers';

const UserDataContext = createContext();

export function UserDataProvider({ children }) {
  const gatewayURL = process.env.NEXT_PUBLIC_GATEWAY_URL;
  console.log("[UserDataProvider] gatewayURL: ", gatewayURL);

  const { user } = useAuth();
  console.log("[UserDataProvider] active user: ", user);

  const [selectedStudy, setSelectedStudy] = useState(null); // selected study id
  const [config, setConfig] = useState(null); // selected configuration
  const [caseStudies, setCaseStudies] = useState([]);

  // function for submitting config form
  const submitConfig = (e) => {
    console.log('[UserDataProvider::submitConfig]');
  }

  // function for creating a new case
  const createCase = (_case) => {
    console.log('[UserDataProvider::createCase] case:', _case);
    gw_CreateCase(_case, user.token);
  };

  const createStudy = () => {
    console.log('[UserDataProvider]::createStudy');
  };

  useEffect(() => {
    console.log("[UserDataProvider] selected study changed: ", selectedStudy);
  }, [selectedStudy]);

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
