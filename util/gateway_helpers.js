
const gatewayURL = process.env.NEXT_PUBLIC_GATEWAY_URL;


export async function gw_GetCaseStudies(_token) {
  fetch (`${gatewayURL}/CaseStudies`, {
    method: 'GET',
    headers: {
      'Authentication': `Bearer ${_token}`
    }
  }).then(response => {
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

export async function gw_CreateCase(_case, _token) {
  console.log("[gw_CreateCase] case:", _case, _token);
  fetch (`${gatewayURL}/case`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authentication': `Bearer ${_token}`
    },
    body: _case.getJSON()
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok. Message: ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
  return -1;
}

export async function gw_GetCaseStudyHeaders(_token) {
  console.log("[gw_GetCaseStudyHeaders] token: ", _token);
  try {
    const response = await fetch(`${gatewayURL}/case_studies`, {
      method: 'GET',
      headers: {
        'Authentication': `Bearer ${_token}`
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok', response);
    }

    const data = await response.json();
    console.log("[gw_GetCaseStudyHeaders] data: ", data);
    const dataArray = Object.entries(data).map(([key, value]) => ({ 
      caseId: key,
      caseName: value.name,
      mrn: value.mrn,
      studyCount: value.study_count,
      studies: value.studies
    }));
    console.log("[gw_GetCaseStudyHeaders] dataArray: ", dataArray);


    return dataArray;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

export function gw_CreateStudy(_caseId, _study) {
  console.log("[gw_CreateStudy] caseId:", _caseId, _study);

}