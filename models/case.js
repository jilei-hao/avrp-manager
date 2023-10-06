export default class Case {
  constructor(_caseName, _caseId = -1) {
    this._m_CaseId = _caseId;
    this._m_CaseName = _caseName;
  }

  getCaseName() {
    return this._m_CaseName;
  }

  getCaseId() {
    return this._m_CaseId;
  }

  getJSON () {
    return JSON.stringify({
      caseId: this._m_CaseId,
      caseName: this._m_CaseName
    });
  }

  
};