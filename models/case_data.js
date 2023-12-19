export default class CaseData {
  constructor(_caseName, _caseId = -1, _MRN = '', _studies = []) {
    this.case_id = _caseId;
    this.case_name = _caseName;
    this.MRN = _MRN;
    this.studies = _studies;
  }

  getNumberOfStudies () {
    return this.studies.length;
  }

  getJSON () {
    return JSON.stringify({
      caseId: this.case_id,
      caseName: this.case_name
    });
  }
};