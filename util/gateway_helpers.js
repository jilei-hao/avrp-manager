
const gatewayURL = process.env.NEXT_PUBLIC_GATEWAY_URL;


export function gw_GetCaseStudies(_token) {
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

export function gw_CreateCase(_case, _token) {
  fetch (`${gatewayURL}/case_studies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authentication': `Bearer ${_token}`
    },
    body: _case.getJSON()
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
  return caseId;
}

export function gw_CreateStudy(_caseId, _study) {

}