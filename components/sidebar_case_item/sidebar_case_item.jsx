import React, { useState } from 'react';
import styles from './sidebar_case_item.module.css'
import { useUserData } from '@/util/user_data_context';
import { SidebarStudyItem } from '../sidebar_study_item/sidebar_study_item';

export default function SidebarCaseItem ({ case_data }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const {selectedStudy, setSelectedStudy, createStudy} = useUserData();

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const onStudySelected = (e) => {
    const study_id = e.target.id;
    setSelectedStudy(study_id);
  };

  return (
    <div className={styles.caseStudyItem}>
      <div className={ styles.caseItem } onClick={ toggleExpansion }>
        {case_data.caseName}
      </div>
      {isExpanded && (case_data.study_count > 0) && (
        case_data.studies.map((study_data, index) => (
          <SidebarStudyItem key={index} study_data={study_data} active={selectedStudy == study_data.id} />
        ))
      )}
    </div>
  );
};
