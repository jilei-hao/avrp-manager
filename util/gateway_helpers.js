import CaseData from '../models/case_data';
import Study from '../models/study';
const gatewayURL = process.env.NEXT_PUBLIC_GATEWAY_URL;


export async function gw_GetCaseStudies(_token) {
  return fetch (`${gatewayURL}/CaseStudies`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${_token}`
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('[gw_GetCaseStudies] Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('[gw_GetCaseStudies] Fetch error:', error);
  });
}

export async function gw_GetCaseStudyHeaders(_token) {
  return fetch(`${gatewayURL}/case_studies`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${_token}`
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then(data => {
      const caseStudies = Object.entries(data).map(([key, value]) => (
        new CaseData(
          value.name,
          key,
          value.mrn,
          value.studies.map(study => new Study(study.id, study.name))
        )
      ));
      return Promise.resolve(caseStudies);
    }).catch (error =>{
    console.error('Fetch error:', error);
    });
}

export async function gw_CreateCase(_case, _token) {
  return fetch (`${gatewayURL}/case`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${_token}`
    },
    body: _case.getJSON()
  }).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok. Message: ' + response.statusText);
    }
    return response.json();
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
}

export async function gw_CreateStudy(_caseId, _studyName, _token) {
  return fetch (`${gatewayURL}/study`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${_token}`
    },
    body: JSON.stringify({
      caseId: _caseId,
      studyName: _studyName
    })
  }).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok. Message: ' + response.statusText);
    }
    return response.json();
  }).catch(error => {
    console.error('Fetch error:', error);
  });
}