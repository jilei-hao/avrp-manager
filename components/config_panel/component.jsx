import React, { useState } from 'react';
import styles from './component.module.css'
import ConfigForm from '../config-form/component';
import ConfigDashboard from '../config-dashboard/component';
import { useUserData } from '@/util/user_data_context';

export default function ConfigPanel () {
  const { selectedStudy } = useUserData();

  console.log("[config_panel] selectedStudy: ", selectedStudy)

  return (
    <div className={styles.panelContainer}>
      {selectedStudy ? <ConfigForm/> : ''}
    </div>
  );
};