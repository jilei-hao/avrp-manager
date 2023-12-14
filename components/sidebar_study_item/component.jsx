import React, { useState } from 'react';
import styles from './component.module.css'

export default function SidebarStudyItem ({ study_data, active, onStudySelected }) {
  return (
    <div className={styles.studyItem}>
        <div 
          className={`${styles.studyItem} ${active ? styles.studyItemActive : ''}`} 
          id={study_data.id}  onClick={ onStudySelected }
        >
          {study_data.name}
        </div>
    </div>
  )
}