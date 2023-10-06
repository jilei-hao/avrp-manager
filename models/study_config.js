class StudyConfig {
  constructor(_studyId) {
    this._m_StudyId = _studyId;
    this._m_Image4D = null;
    this._m_SysConfig = null;
    this._m_DiasConfig = null;
    this._m_Submitted = false;
  }

  getStudyId() {
    return this._m_StudyId;
  }

  setImage4D(_img4d) {
    this._m_Image4D = _img4d;
  }

  getImage4D() {
    return this._m_Image4D;
  }

  setSystolicConfig(_sysConfig) {
    this._m_SysConfig = _sysConfig;
  }

  getSystolicConfig() {
    return this._m_SysConfig;
  }

  setDiastolicConfig(_diasConfig) {
    this._m_DiasConfig = _diasConfig;
  }

  getDiastolicConfig() {
    return this._m_DiasConfig;
  }

  setSubmittedToTrue() {
    this._m_Submitted = true;
  }

  setSubmittedToFalse() {
    this._m_Submitted = false;
  }

  getSubmitted() {
    return this._m_Submitted;
  }
};