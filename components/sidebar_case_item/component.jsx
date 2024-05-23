import React, { useState } from 'react';
import styles from './component.module.css'
import { useUserData } from '@/util/user_data_context';
import SidebarStudyItem from '../sidebar_study_item/component';
import CaseData from '@/models/case_data';

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

  const onCreateStudyClicked = () => {
    const studyName = prompt("Please enter the study name");
    if (studyName) {
      createStudy(case_data.case_id, studyName);
    }
  };

  return (
    <div className={ styles.caseStudyItem }>
      <div className={ styles.caseItem } onClick={ toggleExpansion }>
        <span>{ case_data.case_name }</span>
        <button className={ styles.createStudyButton} onClick={ onCreateStudyClicked }>
          +
        </button>
      </div>
      {isExpanded && (case_data.getNumberOfStudies() > 0) && (
        case_data.studies.map((study_data, index) => (
          <SidebarStudyItem key={index} 
            study_data={study_data}
            active={selectedStudy == study_data.id} 
            onStudySelected={ onStudySelected }
          />
        ))
      )}
    </div>
  );
};
