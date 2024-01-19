import React, { createContext, useContext, useState, useEffect} from 'react';
import { useAuth } from './auth_context';
import { 
  gw_CreateCase, gw_CreateStudy, gw_GetCaseStudyHeaders,
  gw_CreateStudyConfig
} from './gateway_helpers';

const UserDataContext = createContext();

export function UserDataProvider({ children }) {
  const { user } = useAuth();
  console.log("[UserDataProvider] active user: ", user);

  const [selectedStudy, setSelectedStudy] = useState(null); // selected study id
  const [config, setConfig] = useState(null); // selected configuration
  const [caseStudyHeaders, setCaseStudyHeaders] = useState(null);

  const fetchCaseStudies = async () => {
    gw_GetCaseStudyHeaders(user.token)
      .then((data) => {
        setCaseStudyHeaders(data);
      }).catch (error => {
        console.error(`Error fetching case studies: ${error}`);
      });
  };

  // function for submitting config form
  const submitConfig = (formData) => {
    console.log('[UserDataProvider::submitConfig]', formData);
    gw_CreateStudyConfig(formData, user.token)
    .then((response) => {
      console.log('[UserDataProvider::submitConfig] response: ', response);
    })
  }

  // function for creating a new case
  const createCase = async (_case) => {
    console.log('[UserDataProvider::createCase] case:', _case);
    gw_CreateCase(_case, user.token)
      .then((data) => {
        fetchCaseStudies();
      })
      .catch(error => {
        console.error('Error creating case:', error);
      });
  };

  const createStudy = async (_caseId, _studyName) => {
    console.log('[UserDataProvider::createStudy] caseId: ', _caseId, ' studyName: ', _studyName);
    gw_CreateStudy(_caseId, _studyName, user.token)
      .then((data) => {
        fetchCaseStudies();
      })
      .catch(error => {
        console.error('Error creating study:', error);
      });
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
      value={{ 
        caseStudyHeaders, 
        selectedStudy, 
        setSelectedStudy,
        createCase, 
        createStudy, 
        config, 
        submitConfig
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  return useContext(UserDataContext);
};
