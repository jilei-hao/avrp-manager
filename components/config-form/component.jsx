import React, { useEffect, useState } from 'react'
import styles from './component.module.css'
import { useUserData } from '@/util/user_data_context';

function setNestedObjectValue(obj, path, value) {
  const pathParts = path.split('.');
  let current = obj;
  for (let i = 0; i < pathParts.length - 1; i++) {
    current = current[pathParts[i]];
  }
  current[pathParts[pathParts.length - 1]] = value;
}

const getBlankConfig = (_study_id) => {
  return {
    study_id: _study_id,
    image_4d: '',
    tp_start: '',
    tp_end: '',
    reference_seg_sys: '',
    tp_ref_sys: '',
    tp_start_sys: '',
    tp_end_sys: '',
    reference_seg_dias: '',
    tp_ref_dias: '',
    tp_start_dias: '',
    tp_end_dias: ''
  }
};

export default function ConfigForm() {
  const { selectedStudy, submitConfig } = useUserData();

  const [formData, setFormData] = useState(getBlankConfig(selectedStudy));

  // reset the form whenever the selected study changes
  useEffect(() => {
    setFormData(prevData => (getBlankConfig(selectedStudy)))}
    , [selectedStudy]);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitConfig(formData);
  }

  const handleInputChange = (e) => {
    console.log('--[ConfigForm] handleInputChange');
    console.log(`---- target.name: ${e.target.name}, target.value: ${e.target.value}`);
    setFormData((prevData) => {
      const newFormData = { ...prevData };
      setNestedObjectValue(newFormData, e.target.name, e.target.value);
      return newFormData;
    });
  };

  const handleFileInputChange = (e) => {
    console.log('--[ConfigForm] handleFileInputChange');
    const { name } = e.target;
    const selectedFile = e.target.files[0];
    console.log(`---- target.name: ${e.target.name}, selected file: ${selectedFile}`);
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: selectedFile,
    }));
  }

  return (
    <form className={styles.configForm} onSubmit={handleSubmit}>
      {/* General Config */}
      <div className={styles.panelHeader}>
        Study Configuration (Id: {selectedStudy})
      </div>
      <label className={styles.configLabelInline}  htmlFor="image4d">Image 4D:</label>
      <input className={styles.inputText}
        type="file"
        id="image4d"
        name="image_4d"
        accept="*.nii.gz"
        onChange={handleFileInputChange}
        required
      />
      <label className={styles.configLabelInline}  htmlFor="tpStart">Time Point Range:</label>
      <input
        className={styles.tpInput}
        type="number"
        id="tpStart"
        name="tp_start"
        value={formData.tp_start}
        onChange={handleInputChange}
        required
      />
      <span>to</span>
      <input
        className={styles.tpInput}
        type="number"
        id="tpEnd"
        name="tp_end"
        value={formData.tp_end}
        onChange={handleInputChange}
        required
      />

      {/* Systolic Config */}
      <div className={styles.propagationContainer} >
        <div className={styles.propagationHeader} >Systolic Propagation</div>
        <label className={styles.configLabelInline}  htmlFor="sysRefSeg">Reference Segmentation:</label>
        <input
          className={styles.inputText}
          type="file"
          id="sysRefSeg"
          name="reference_seg_sys"
          onChange={handleFileInputChange}
          required
        />
        <div className={styles.panelLineBlock}>
          <label className={styles.configLabelInline} htmlFor="sysTPRef">Reference Timepoint:</label>
          <input
            className={styles.tpInput}
            type="number"
            id="sysTPRef"
            name="tp_ref_sys"
            value={formData.tp_ref_sys}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.panelLineBlock}>
          <label className={styles.configLabelInline}  htmlFor="sysTPStart">Propagation Range:</label>
          <input
            className={styles.tpInput}
            type="number"
            id="sysTPStart"
            name="tp_start_sys"
            value={formData.tp_start_sys}
            onChange={handleInputChange}
            required
          />
          <span>to</span>
          <input
            className={styles.tpInput}
            type="number"
            id="sysTPEnd"
            name="tp_end_sys"
            value={formData.tp_end_sys}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      {/* Diastolic Config */}
      <div className={styles.propagationContainer}>
        <div className={styles.propagationHeader} >Diastolic Propagation</div>
        <label className={styles.configLabelInline}  htmlFor="diasRefSeg">Reference Segmentation:</label>
        <input
          className={styles.inputText}
          type="file"
          id="diasRefSeg"
          name="reference_seg_dias"
          onChange={handleFileInputChange}
          required
        />
        <div className={styles.panelLineBlock}>
          <label className={styles.configLabelInline} htmlFor="diasTPRef">Reference Timepoint:</label>
          <input
            className={styles.tpInput}
            type="number"
            id="diasTPRef"
            name="tp_ref_dias"
            value={formData.tp_ref_dias}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.panelLineBlock}>
          <label className={styles.configLabelInline}  htmlFor="diasTPStart">Propagation Range:</label>
          <input
            className={styles.tpInput}
            type="number"
            id="diasTPStart"
            name="tp_start_dias"
            value={formData.tp_start_dias}
            onChange={handleInputChange}
            required
          />
          <span>to</span>
          <input
            className={styles.tpInput}
            type="number"
            id="diasTPEnd"
            name="tp_end_dias"
            value={formData.tp_end_dias}
            onChange={handleInputChange}
            required
          />
        </div>

      </div>

      <input className={styles.inputSubmit} type="submit" value="Submit" />
    </form>
  );
}