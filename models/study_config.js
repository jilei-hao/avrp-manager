class StudyConfig {
  constructor(_config) {
    this.main_image_id = _config.main_image_id;
    this.tp_start = _config.tp_start;
    this.tp_end = _config.tp_end;
    this.sys_refseg_id = _config.sys_refseg_id;
    this.sys_tp_start = _config.sys_tp_start;
    this.sys_tp_end = _config.sys_tp_end;
    this.sys_tp_ref = _config.sys_tp_ref;
    this.dias_refseg_id = _config.dias_refseg_id;
    this.dias_tp_start = _config.dias_tp_start;
    this.dias_tp_end = _config.dias_tp_end;
    this.dias_tp_ref = _config.dias_tp_ref;
  }
};