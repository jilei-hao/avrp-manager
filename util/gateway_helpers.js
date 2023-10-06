
const gatewayURL = process.env.NEXT_PUBLIC_GATEWAY_URL;


export function gw_GetCaseStudies(_userToken) {
  fetch (`${gatewayURL}/CaseStudies?token=${_userToken}`)
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
}

export function gw_CreateCase(_case) {
  
  return caseId;
}

export function gw_CreateStudy(_caseId, _study) {

}