// A dashboard displaying existing study-config if it exists

import React, { useState } from 'react'
import styles from './component.module.css'
import { useUserData } from '@/util/user_data_context';

export default function ConfigDashboard() {
  const { selectedStudy, studyConfig } = useUserData();

  console.log("[config_dashboard] selectedStudy: ", selectedStudy)
  console.log("[config_dashboard] studyConfig: ", studyConfig)

  return (
    <div className={styles.configDashboard}>
      
    </div>
  );

}