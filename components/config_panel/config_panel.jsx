import React, { useState } from 'react';
import styles from './config_panel.module.css'
import ConfigForm from '../config_form/config_form';

export default function ConfigPanel ({ study_id, config, onSubmit }) {
  console.log("--[ConfigPanel] render");

  return (
    <div className={styles.panelContainer}>
      {study_id ? <ConfigForm study_id={study_id} onSubmit={onSubmit}/> : ''}
    </div>
  );
};