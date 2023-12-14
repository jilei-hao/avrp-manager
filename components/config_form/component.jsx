import React, { useState } from 'react'
import styles from './component.module.css'

export default function ConfigForm({ study_id, existingData, onSubmit }) {

  const [formData, setFormData] = useState( existingData || {
      study_id: study_id,
      image_4d: '',
      tp_start: 1,
      tp_end: 14,
      systolic_propagation: {
        reference_seg: '',
        tp_ref: 3,
        tp_start: 1,
        tp_end: 7,
      },
      diastolic_propagation: {
        reference_seg: '',
        tp_ref: 10,
        tp_start: 8,
        tp_end: 14,
      },
    }
  );

  const handleInputChange = (e) => {
    console.log('--[ConfigForm] handleInputChange');
    console.log(`---- target.name: ${e.target.name}, target.value: ${e.target.value}`);

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
    <form className={styles.configForm} onSubmit={onSubmit}>
      {/* General Config */}
      <div className={styles.panelHeader}>
        Study Configuration (Id: {study_id})
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
          name="systolic_propagation.reference_seg"
          onChange={handleFileInputChange}
          required
        />
        <div className={styles.panelLineBlock}>
          <label className={styles.configLabelInline} htmlFor="sysTPRef">Reference Timepoint:</label>
          <input
            className={styles.tpInput}
            type="number"
            id="sysTPRef"
            name="systolic_propagation.tp_ref"
            value={formData.systolic_propagation.tp_ref}
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
            name="systolic_propagation.tp_start"
            value={formData.systolic_propagation.tp_start}
            onChange={handleInputChange}
            required
          />
          <span>to</span>
          <input
            className={styles.tpInput}
            type="number"
            id="sysTPEnd"
            name="systolic_propagation.tp_end"
            value={formData.systolic_propagation.tp_end}
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
          name="diastolic_propagation.reference_seg"
          onChange={handleFileInputChange}
          required
        />
        <div className={styles.panelLineBlock}>
          <label className={styles.configLabelInline} htmlFor="diasTPRef">Reference Timepoint:</label>
          <input
            className={styles.tpInput}
            type="number"
            id="diasTPRef"
            name="diastolic_propagation.tp_ref"
            value={formData.diastolic_propagation.tp_ref}
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
            name="diastolic_propagation.tp_start"
            value={formData.diastolic_propagation.tp_start}
            onChange={handleInputChange}
            required
          />
          <span>to</span>
          <input
            className={styles.tpInput}
            type="number"
            id="diasTPEnd"
            name="diastolic_propagation.tp_end"
            value={formData.diastolic_propagation.tp_end}
            onChange={handleInputChange}
            required
          />
        </div>

      </div>

      <input className={styles.inputSubmit} type="submit" value="Submit" />
    </form>
  );
}