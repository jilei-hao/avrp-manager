import React, { createContext, useContext, useState, useEffect} from 'react';
import { useAuth } from './auth_context';
import { gw_CreateCase, gw_GetCaseStudyHeaders } from './gateway_helpers';

const UserDataContext = createContext();

export function UserDataProvider({ children }) {
  const gatewayURL = process.env.NEXT_PUBLIC_GATEWAY_URL;
  console.log("[UserDataProvider] gatewayURL: ", gatewayURL);

  const { user } = useAuth();
  console.log("[UserDataProvider] active user: ", user);

  const [selectedStudy, setSelectedStudy] = useState(null); // selected study id
  const [config, setConfig] = useState(null); // selected configuration
  const [caseStudyHeaders, setCaseStudyHeaders] = useState(null);

  const fetchCaseStudies = async () => {
    try {
      const data = await gw_GetCaseStudyHeaders(user.token);
      console.log("[UserDataProvider::UseEffect] case studies: ", data);
      setCaseStudyHeaders(data);
    } catch (error) {
      console.error(`[UserDataProvider::UseEffect]Error fetching case studies: ${error}`);
    }
  };

  // function for submitting config form
  const submitConfig = (e) => {
    console.log('[UserDataProvider::submitConfig]');
  }

  // function for creating a new case
  const createCase = async (_case) => {
    console.log('[UserDataProvider::createCase] case:', _case);
    await gw_CreateCase(_case, user.token);
    fetchCaseStudies();
  };

  const createStudy = () => {
    console.log('[UserDataProvider]::createStudy');
  };

  useEffect(() => {
    console.log("[UserDataProvider] selected study changed: ", selectedStudy);
  }, [selectedStudy]);

  useEffect(() => {
    console.log("[UserDataProvider::UseEffect] user: ", user);
    if (user && user.token) {
      fetchCaseStudies();
    }
    
  }, [user]);

  return (
    <UserDataContext.Provider 
      value={{ caseStudyHeaders, selectedStudy, setSelectedStudy,
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
